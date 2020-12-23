import { Test, TestingModule } from '@nestjs/testing';
import { LebelController } from './lebel.controller';

describe('LebelController', () => {
  let controller: LebelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LebelController],
    }).compile();

    controller = module.get<LebelController>(LebelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
