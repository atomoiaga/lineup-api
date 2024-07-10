import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistModule } from './modules/artist/artist.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ArtistModule,
    MongooseModule.forRoot('mongodb://localhost:27000/line-up'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
