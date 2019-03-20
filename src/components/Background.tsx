import React, { useEffect } from 'react';

import { css } from '@emotion/core';

const GENERATION_RATE = 0.1 // Number per frame

const MIN_VELOCITY = 1
const MAX_VELOCITY = 5

const MIN_COMET_LENGTH = 50
const MAX_COMET_LENGTH = 300

const INITIAL_VELOCITY = 200

const INITIAL_VELOCITY_RATE = 0.05
const INTIAIL_VELOCITY_OFFSET = 50

interface Comet {
  x: number
  y: number
  velocity: number
  length: number
}

const useLogisticValue: () => [
  React.MutableRefObject<number>,
  Function
] = () => {
  const valueRef = React.useRef(INITIAL_VELOCITY)
  const stepRef = React.useRef(0)

  const incrementStep = () => {
    stepRef.current += 1
    const step = stepRef.current
    valueRef.current =
      INITIAL_VELOCITY *
      (1 -
        1 /
          (1 +
            Math.exp(
              -INITIAL_VELOCITY_RATE * (step - INTIAIL_VELOCITY_OFFSET)
            )))
  }
  return [valueRef, incrementStep]
}

const Background = () => {
  const canvasRef = React.useRef(null)
  const cometsRef = React.useRef([] as Comet[])
  const [additionalVelocityRef, stepAdditionalVelocity] = useLogisticValue()

  React.useLayoutEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement

    const ctx = canvas.getContext("2d")

    const onFrame = () => {
      const comets = cometsRef.current
      console.log(additionalVelocityRef.current)
      if (Math.random() < GENERATION_RATE) {
        const newComet = {
          x: Math.random() * window.innerWidth,
          y: 0,
          velocity:
            Math.random() * (MAX_VELOCITY - MIN_VELOCITY) + MIN_VELOCITY,
          length:
            Math.random() * (MAX_COMET_LENGTH - MIN_COMET_LENGTH) +
            MIN_COMET_LENGTH,
        }
        comets.push(newComet)
      }
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      ctx.fillStyle = "midnightBlue"
      comets.forEach((comet, index) => {
        if (comet.y - comet.length > window.innerHeight) {
          comets.splice(index, 1)
        }
        const linearGradient = ctx.createLinearGradient(
          comet.x,
          comet.y - comet.length,
          comet.x,
          comet.y
        )
        linearGradient.addColorStop(0, "midnightBlue")
        linearGradient.addColorStop(1, "white")
        ctx.strokeStyle = linearGradient
        ctx.beginPath()
        ctx.moveTo(comet.x, comet.y - comet.length)
        ctx.lineTo(comet.x, comet.y)
        ctx.closePath()
        ctx.stroke()
        comet.y += comet.velocity + additionalVelocityRef.current
      })
      stepAdditionalVelocity()
      window.requestAnimationFrame(onFrame)
    }

    window.requestAnimationFrame(onFrame)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      height={window.innerHeight}
      width={window.innerWidth}
      css={css`
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        background-color: midnightBlue;
      `}
    />
  )
}

export default Background
