import { Module } from '@nestjs/common';
import { VisaRankingController } from './visa_ranking.controller';
import { VisaRankingService } from './visa_ranking.service';

@Module({
  controllers: [VisaRankingController],
  providers: [VisaRankingService]
})
export class VisaRankingModule {}
