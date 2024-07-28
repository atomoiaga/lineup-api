import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export enum StageEnum {
  STAGE_1 = 'stage_1',
  STAGE_2 = 'stage_2',
  STAGE_3 = 'stage_3',
}

export enum GenreEnum {
  ROCK = 'rock',
  HIP_HOP = 'hip_hop',
  POP = 'pop',
  ELECTRONIC = 'electronic',
  JAZZ = 'jazz',
  RNB_SOUL = 'rnb_soul',
  METAL = 'metal',
}

export class Links {
  @Prop()
  instagram?: string;
  @Prop()
  facebook?: string;
  @Prop()
  website?: string;
  @Prop()
  twitter?: string;
  @Prop()
  youtube?: string;
}

@Schema()
export class Artist {
  @Prop()
  name: string;

  @Prop()
  genre: GenreEnum;

  @Prop()
  stage: StageEnum;

  @Prop()
  links: Links;

  @Prop()
  description: string;
}

export type ArtistDocument = HydratedDocument<Artist>;
export const ArtistSchema = SchemaFactory.createForClass(Artist);
