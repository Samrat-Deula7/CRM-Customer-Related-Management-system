import { Injectable } from '@nestjs/common';

@Injectable()
export class VisaRankingService {
  async findAllRankings(response: any) {
    console.log("Inside the ranking service")
    console.log(response);
  }
}
