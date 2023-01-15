import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { Transform, Type } from 'class-transformer';

export class MagazineDto {
  @ApiProperty({ type: String, description: 'ObjectId', required: false })
  @Type(() => Types.ObjectId)
  @Transform(({ value }) => value.toHexString(), { toPlainOnly: true })
  _id?: Types.ObjectId;

  @ApiProperty({ type: String, required: false })
  editors?: string;

  @ApiProperty({ type: String, required: true })
  name: string;

  @ApiProperty({ type: String, required: false })
  volume?: string;

  @ApiProperty({ type: String, required: false })
  issue?: string;

  @ApiProperty({ type: String, required: false })
  details?: string;

  @ApiProperty({ type: String, required: false })
  city?: string;

  @ApiProperty({ type: String, required: false })
  publisher?: string;

  @ApiProperty({ type: String, description: 'Date', required: false })
  @Type(() => Date)
  @Transform(({ value }) => value.toString(), { toPlainOnly: true })
  date?: Date;

  @ApiProperty({ type: String, required: false })
  issn?: string;
}
