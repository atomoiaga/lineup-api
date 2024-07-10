import { GenreEnum, Links, StageEnum } from '../entities/artist.entity';

export class CreateArtistDto {
  name: string;
  genre: GenreEnum;
  stage: StageEnum;
  links?: Links;
  performance_date: string;
}
