import { Controller, Get } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { VisaRankingService } from '@visa_ranking/visa_ranking.service';

@Controller('visa-ranking')
export class VisaRankingController {
  constructor(
    private visaRanking: VisaRankingService,
    private readonly httpService: HttpService,
  ) {}

  @Get('rankings')
  async findAllRankings() {
    const url = '';
    const response = await firstValueFrom(this.httpService.get(url));
    return this.visaRanking.findAllRankings();
  }
}
