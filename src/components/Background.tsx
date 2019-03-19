import React from 'react';

import { css } from '@emotion/core';

const Background = () => {
  const canvasRef = React.useRef(null)

  React.useLayoutEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    //const callbackRef = React.useRef(() => {});

    const ctx = canvas.getContext("2d")

    let y = 0

    const onFrame = () => {
      ctx.fillStyle = "midnightBlue"
      ctx.clearRect(0, 0, window.innerHeight, window.innerWidth)
      for (let i of Array(30).keys()) {
        const linearGradient = ctx.createLinearGradient(
          i * 50,
          y,
          i * 50,
          y + 200
        )
        linearGradient.addColorStop(0, "midnightBlue")
        linearGradient.addColorStop(1, "white")
        ctx.strokeStyle = linearGradient
        ctx.beginPath()
        ctx.moveTo(i * 50, y)
        ctx.lineTo(i * 50, y + 200)
        ctx.closePath()
        ctx.stroke()
      }
      y += 2
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
