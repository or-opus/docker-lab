import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Docker insights')
    .setDescription('Docker insights API documentation')
    .setVersion('0.0.1')
    .addSecurity('Bearer', {
      type: 'http',
      scheme: 'Bearer',
    })
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
