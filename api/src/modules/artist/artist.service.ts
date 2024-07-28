import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Artist } from './entities/artist.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ArtistService {
  constructor(@InjectModel(Artist.name) private model: Model<Artist>) {}
  async create(createArtistDto: CreateArtistDto): Promise<Artist> {
    const createdArtist = new this.model(createArtistDto);
    return createdArtist.save();
  }

  async findAll(): Promise<Artist[]> {
    return this.model.find().exec();
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
