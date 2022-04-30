import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsOptional } from 'class-validator';

export class ResultOptionalPropertiesSwagger {
  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  findStart?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  findEnd?: Date;
}
