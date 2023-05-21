import { Injectable } from '@nestjs/common'
import { createCanvas, type CanvasRenderingContext2D } from 'canvas'

@Injectable()
export class AppService {
  getHello (): string {
    return 'Hello World!'
  }

  drawSolution (params: DrawSolutionParams) {
    const {
      target: { height, width },
      fontSize = 14,
    } = params
    const drawScale = fontSize
    const canvasWidth = width * drawScale
    const canvasHeight = height * drawScale
    const canvas = createCanvas(canvasWidth, canvasHeight)
    const ctx = canvas.getContext('2d')
    drawSolutionWithContext(ctx, params)
    return canvas.toDataURL()
  }
}

export interface PositionRect {
  width: number
  height: number
  x: number
  y: number
  colorData: {
    bgColor: string
    borderColor: string
  }
  depth: number
  type: number
}

export interface DrawSolutionParams {
  target: { width: number; height: number }
  solution: PositionRect[]
  fontSize?: number
  fontScale?: number
  fontColor?: string
}

function drawSolutionWithContext (
  ctx: CanvasRenderingContext2D,
  params: DrawSolutionParams,
) {
  const {
    target,
    solution,
    fontSize = 14,
    fontScale = 1.5,
    fontColor = '#000',
  } = params
  const drawScale = fontSize
  const { width, height } = target

  ctx.clearRect(0, 0, width * drawScale, height * drawScale)
  for (const rect of solution) {
    const {
      colorData: { bgColor, borderColor },
      width,
      depth,
      height,
      x,
      y,
    } = rect

    ctx.fillStyle = bgColor
    ctx.strokeStyle = borderColor
    ctx.fillRect(
      x * drawScale,
      y * drawScale,
      width * drawScale,
      height * drawScale,
    )
    ctx.strokeRect(
      x * drawScale,
      y * drawScale,
      width * drawScale,
      height * drawScale,
    )
    ctx.save()
    ctx.fillStyle = fontColor
    ctx.font = `${fontSize * fontScale}px Arial`
    const str = [depth, width, height].join(':')
    const measureText = ctx.measureText(str)

    ctx.fillText(
      str,
      x * drawScale + (width * drawScale - measureText.width) / 2,
      y * drawScale + fontSize + (height * drawScale - fontSize) / 2,
    )
    ctx.restore()
  }
}
