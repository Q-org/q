import { Test, TestingModule } from '@nestjs/testing';
import { JavaService } from './java.service';

describe('JavaService', () => {
  let service: JavaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JavaService],
    }).compile();

    service = module.get<JavaService>(JavaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
