import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { ParseObjectIdPipe } from 'src/pipes/parse-object-id.pipe';

import { MagazineDto } from './magazine.dto';
import { MagazinesService } from './magazines.service';

@Controller('magazines')
export class MagazinesController {
  constructor(private readonly magazinesService: MagazinesService) {}

  @Get()
  async getAll(): Promise<MagazineDto[]> {
    return await this.magazinesService.getAll();
  }

  @Post()
  async createOne(@Body() newMagazine: MagazineDto): Promise<MagazineDto> {
    return await this.magazinesService.createOne(newMagazine);
  }

  @Put(':magazineId')
  async modifyOne(
    @Body() magazineToModify: MagazineDto,
    @Param('magazineId', ParseObjectIdPipe) magazineId: Types.ObjectId,
  ): Promise<MagazineDto> {
    return await this.magazinesService.modifyOne(magazineId, magazineToModify);
  }

  @Delete(':magazineId')
  async deleteOne(
    @Param('magazineId', ParseObjectIdPipe) magazineId: Types.ObjectId,
  ): Promise<MagazineDto> {
    return await this.magazinesService.deleteOne(magazineId);
  }
}
