import { Module } from '@nestjs/common';

import { DockerInsightsModule } from './docker-insights/docker-insights.module';

@Module({
  imports: [DockerInsightsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
