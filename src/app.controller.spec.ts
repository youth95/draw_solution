import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from './app.controller'
import { AppService } from './app.service'

describe('AppController', () => {
  let appController: AppController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile()

    appController = app.get<AppController>(AppController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!')
    })
  })

  describe('drawSolution', () => {
    it('should work', () => {
      expect(
        appController.drawSolution({
          target: { height: 10, width: 8 },
          solution: [
            {
              colorData: {
                bgColor: '#fef5ce',
                borderColor: '#ffeb94',
              },
              depth: 3,
              height: 5,
              type: 1,
              width: 4,
              x: 0,
              y: 0,
            },
            {
              colorData: {
                bgColor: '#fef5ce',
                borderColor: '#ffeb94',
              },
              depth: 3,
              height: 5,
              type: 1,
              width: 4,
              x: 4,
              y: 0,
            },
            {
              colorData: {
                bgColor: '#fef5ce',
                borderColor: '#ffeb94',
              },
              depth: 3,
              height: 5,
              type: 1,
              width: 4,
              x: 0,
              y: 5,
            },
            {
              colorData: {
                bgColor: '#fef5ce',
                borderColor: '#ffeb94',
              },
              depth: 3,
              height: 5,
              type: 1,
              width: 4,
              x: 4,
              y: 5,
            },
          ],
        }),
      ).not.toBeUndefined()
    })
  })
})
