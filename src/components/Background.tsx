import React from 'react'

import { withTheme } from 'emotion-theming'
import useWindowSize from 'react-use/lib/useWindowSize'

import { css } from '@emotion/core'

const GENERATION_RATE = 0.1 // Number per frame

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

const createComet = (width: number) => {
  const comet = {
    x: Math.random() * width,
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

interface Props {
  theme: any
}

const Background: React.FunctionComponent<Props> = withTheme(({ theme }) => {
  const themeRef = React.useRef(theme)
  if (themeRef.current !== theme) {
    themeRef.current = theme
  }

  const canvasRef = React.useRef(null)

  const windowSize = useWindowSize()
  React.useLayoutEffect(() => {
    canvasRef.current.height = windowSize.height
    canvasRef.current.width = windowSize.width
  }, [windowSize])

  const cometsRef = React.useRef([] as Comet[])
  const [additionalVelocityRef, stepAdditionalVelocity] = useLogisticValue()

  React.useLayoutEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    const ctx = canvas.getContext('2d')

    const onFrame = () => {
      const theme = themeRef.current
      const comets = cometsRef.current
      const numberCometsToGenerate = getNumberCometsToGenerate()
      for (let _ of Array(numberCometsToGenerate).keys()) {
        const newComet = createComet(canvas.width)
        comets.push(newComet)
      }
      ctx.fillStyle = theme.backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      comets.forEach((comet, index) => {
        const length = getCometLength(comet, additionalVelocityRef.current)
        if (comet.y - length > canvas.height) {
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

  return (
    <canvas
      ref={canvasRef}
      css={css`
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
      `}
    />
  )
})

export default Background
