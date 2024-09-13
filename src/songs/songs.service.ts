import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // lcoal db
  // local array...

  private readonly songs = [];

  //  save the songs in the database...
  create(song) {
    return this.songs.push(song);
  }

  //   fetch the songs from the database...
  findAll() {
    return this.songs;
  }
}
