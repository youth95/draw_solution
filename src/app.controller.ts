import { Controller, Get, Body, Post } from '@nestjs/common'
import {
  AppService,
  type DrawSolutionParams,
} from './app.service'

@Controller()
export class AppController {
  constructor (private readonly appService: AppService) {}

  @Get()
  getHello (): string {
    return this.appService.getHello()
  }

  @Post('/drawSolution')
  drawSolution (@Body() params: DrawSolutionParams) {
    return {
      image: this.appService.drawSolution(params),
    }
  }
}
