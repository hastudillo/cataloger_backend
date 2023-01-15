import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type MagazineDocument = HydratedDocument<Magazine>;

@Schema()
export class Magazine {
  _id?: Types.ObjectId;

  @Prop({ type: String, required: false })
  editors?: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: false })
  volume?: string;

  @Prop({ type: String, required: false })
  issue?: string;

  @Prop({ type: String, required: false })
  details?: string;

  @Prop({ type: String, required: false })
  city?: string;

  @Prop({ type: String, required: false })
  publisher: string;

  @Prop({ type: Date, required: false })
  date: Date;

  @Prop({ type: String, required: false })
  issn?: string;
}

export const MagazineSchema = SchemaFactory.createForClass(Magazine);
