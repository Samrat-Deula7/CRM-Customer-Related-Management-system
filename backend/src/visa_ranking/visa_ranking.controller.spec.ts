import { Test, TestingModule } from '@nestjs/testing';
import { VisaRankingController } from './visa_ranking.controller';

describe('VisaRankingController', () => {
  let controller: VisaRankingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VisaRankingController],
    }).compile();

    controller = module.get<VisaRankingController>(VisaRankingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
