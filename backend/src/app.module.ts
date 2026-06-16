import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VisaRankingModule } from './visa_ranking/visa_ranking.module';

@Module({
  imports: [VisaRankingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
