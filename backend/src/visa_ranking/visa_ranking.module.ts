import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { VisaRankingController } from './visa_ranking.controller';
import { VisaRankingService } from './visa_ranking.service';

@Module({
  imports: [HttpModule],
  controllers: [VisaRankingController],
  providers: [VisaRankingService],
})
export class VisaRankingModule {}
