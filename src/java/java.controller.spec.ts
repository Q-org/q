import { Test, TestingModule } from '@nestjs/testing';
import { JavaController } from './java.controller';
import { JavaService } from './java.service';

describe('JavaController', () => {
  let controller: JavaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JavaController],
      providers: [JavaService],
    }).compile();

    controller = module.get<JavaController>(JavaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
