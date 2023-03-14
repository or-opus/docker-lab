import { Module } from '@nestjs/common';

import { DockerInsightsService } from './docker-insights.service';
import { DockerInsightsController } from './docker-insights.controller';

@Module({
  controllers: [DockerInsightsController],
  providers: [DockerInsightsService],
  imports: [],
  exports: [],
})
export class DockerInsightsModule {}
