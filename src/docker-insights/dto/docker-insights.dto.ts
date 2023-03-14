import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetDockerInsightsDto {
  @ApiProperty({
    description: 'Docker image ID',
    type: 'string',
  })
  @IsString()
  readonly imageId: string;
}
