import { Controller, Get, Query } from '@nestjs/common';
import { DockerInsightsService } from './docker-insights.service';
import { GetDockerInsightsDto } from './dto/docker-insights.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Docker insights')
@Controller('docker-insights')
export class DockerInsightsController {
  constructor(private readonly dockerInsightsService: DockerInsightsService) {}

  @Get('')
  async getDockerInsights(@Query() query: GetDockerInsightsDto) {
    return this.dockerInsightsService.getDockerInsights(query);
  }
}
