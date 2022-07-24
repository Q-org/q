import { Test, TestingModule } from '@nestjs/testing';
import { GController } from './g.controller';
import { GService } from './g.service';

describe('GController', () => {
  let gController: GController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GController],
      providers: [GService],
    }).compile();

    gController = app.get<GController>(GController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(gController.getHello()).toBe('Hello World!');
    });
  });
});
