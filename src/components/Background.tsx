import React, { useEffect } from 'react';

import { number } from 'prop-types';
import useDarkMode from 'use-dark-mode';

import { css } from '@emotion/core';

import { useTheme } from '../utils/theme';

const GENERATION_RATE = 0.02 // Number per frame

const MIN_VELOCITY = 1
const MAX_VELOCITY = 5

const MIN_COMET_SIZE = 50
const MAX_COMET_SIZE = 100

const INITIAL_VELOCITY = 100

const INITIAL_VELOCITY_RATE = 0.05
const INTIAIL_VELOCITY_OFFSET = 50

interface Comet {
  x: number
  y: number
  velocity: number
  size: number
}

const getNumberCometsToGenerate = () => {
  let number = Math.floor(GENERATION_RATE)
  const decimalPart = GENERATION_RATE % 1
  if (Math.random() < decimalPart) {
    number += 1
  }
  return number
}

const createComet = () => {
  const comet = {
    x: Math.random() * window.innerWidth,
    y: 0,
    velocity: Math.random() * (MAX_VELOCITY - MIN_VELOCITY) + MIN_VELOCITY,
    size: Math.random() * (MAX_COMET_SIZE - MIN_COMET_SIZE) + MIN_COMET_SIZE,
  }
  return comet
}

const getCometLength = (comet: Comet, additionalVelocity: number) => {
  const multiplier = additionalVelocity + comet.velocity
  return comet.size * multiplier
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
  const darkMode = useDarkMode()
  const darkModeRef = React.useRef(darkMode.value)
  if (darkModeRef.current !== darkMode.value) {
    darkModeRef.current = darkMode.value
  }

  const theme = useTheme()
  const themeRef = React.useRef(theme)
  if (themeRef.current !== theme) {
    themeRef.current = theme
  }

  const canvasRef = React.useRef(null)
  const cometsRef = React.useRef([] as Comet[])
  const [additionalVelocityRef, stepAdditionalVelocity] = useLogisticValue()

  React.useLayoutEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement

    const ctx = canvas.getContext("2d")

    const onFrame = () => {
      const theme = themeRef.current
      const comets = cometsRef.current
      const numberCometsToGenerate = getNumberCometsToGenerate()
      for (let _ of Array(numberCometsToGenerate).keys()) {
        const newComet = createComet()
        comets.push(newComet)
      }
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      ctx.fillStyle = theme.backgroundColor
      comets.forEach((comet, index) => {
        const length = getCometLength(comet, additionalVelocityRef.current)
        if (comet.y - length > window.innerHeight) {
          comets.splice(index, 1)
        }
        const linearGradient = ctx.createLinearGradient(
          comet.x,
          comet.y - length,
          comet.x,
          comet.y
        )
        linearGradient.addColorStop(0, theme.backgroundColor)
        linearGradient.addColorStop(1, theme.primaryColor)
        ctx.strokeStyle = linearGradient
        ctx.beginPath()
        ctx.moveTo(comet.x, comet.y - length)
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

  const [height, setHeight] = React.useState<number>(0)
  const [width, setWidth] = React.useState<number>(0)

  React.useLayoutEffect(() => {
    setHeight(window.innerHeight)
    setWidth(window.innerWidth)
  }, [])
  return (
    <canvas
      ref={canvasRef}
      height={height}
      width={width}
      css={css`
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        background-color: ${theme.backgroundColor};
      `}
    />
  )
}

export default Background
