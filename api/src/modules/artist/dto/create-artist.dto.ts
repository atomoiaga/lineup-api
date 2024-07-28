import { ApiProperty } from '@nestjs/swagger';
import { GenreEnum, Links, StageEnum } from '../entities/artist.entity';

export class CreateArtistDto {
  @ApiProperty({ example: 'Artist Name' })
  name: string;
  @ApiProperty({ enum: GenreEnum, example: GenreEnum.ELECTRONIC })
  genre: GenreEnum;
  @ApiProperty({ enum: StageEnum, example: StageEnum.STAGE_1 })
  stage: StageEnum;
  @ApiProperty({ example: { website: 'https://example.com' } })
  links?: Links;
  @ApiProperty({ example: 'Artist Description' })
  description: string;
}
