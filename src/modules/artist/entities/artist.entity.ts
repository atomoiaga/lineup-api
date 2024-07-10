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
  instagram?: string;
  facebook?: string;
  website?: string;
  twitter?: string;
  youtube?: string;
}

export class Artist {
  name: string;
  genre: GenreEnum;
  stage: StageEnum;
  links: Links;
  performance_date: string;
}
