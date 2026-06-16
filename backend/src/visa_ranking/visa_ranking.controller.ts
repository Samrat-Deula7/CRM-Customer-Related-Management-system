import { Controller } from '@nestjs/common';
import {VisaRankingService} from "@visa_ranking/visa_ranking.service"

@Controller('visa-ranking')
export class VisaRankingController {
    constructor(
        private visaRanking: VisaRankingService
    ){}
}
