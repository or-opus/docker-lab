import { Injectable } from '@nestjs/common';
import { GetDockerInsightsDto } from './dto/docker-insights.dto';

@Injectable()
export class DockerInsightsService {
  constructor() {}

  async getDockerInsights(data: GetDockerInsightsDto) {
    console.log(data.imageId, '<<< image ID');
  }
}
