import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Artist } from './entities/artist.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ArtistService {
  constructor(@InjectModel(Artist.name) private model: Model<Artist>) {}
  create(createArtistDto: CreateArtistDto) {
    const createdArtist = new this.model(createArtistDto);
    return createdArtist.save();
  }

  findAll() {
    return `This action returns all artist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} artist`;
  }

  update(id: number, updateArtistDto: UpdateArtistDto) {
    return `This action updates a #${id} artist`;
  }

  remove(id: number) {
    return `This action removes a #${id} artist`;
  }
}
