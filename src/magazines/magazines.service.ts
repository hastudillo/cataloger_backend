import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { Magazine, MagazineDocument } from '../schemas/magazines.schema';
import { MagazineDto } from './magazine.dto';

@Injectable()
export class MagazinesService {
  constructor(
    @InjectModel(Magazine.name) private magazineModel: Model<MagazineDocument>,
  ) {}

  async getAll(): Promise<Magazine[]> {
    return this.magazineModel.find();
  }

  async createOne(newMagazine: MagazineDto): Promise<Magazine> {
    const createdMagazine = await this.magazineModel.create(newMagazine);
    return createdMagazine.save();
  }

  async modifyOne(
    magazineId: Types.ObjectId,
    magazineToModify: MagazineDto,
  ): Promise<Magazine> {
    return this.magazineModel.findOneAndReplace(
      { _id: magazineId },
      magazineToModify,
      {
        new: true,
      },
    );
  }

  async deleteOne(magazineId: Types.ObjectId): Promise<Magazine> {
    return this.magazineModel.findByIdAndRemove({ _id: magazineId });
  }
}
