import { Test, TestingModule } from '@nestjs/testing';
import { VisaRankingService } from './visa_ranking.service';

describe('VisaRankingService', () => {
  let service: VisaRankingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VisaRankingService],
    }).compile();

    service = module.get<VisaRankingService>(VisaRankingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
