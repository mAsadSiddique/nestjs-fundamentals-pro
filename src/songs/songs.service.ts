import { Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.TRANSIENT,
})
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
    // having error from the database during fetching data...

    // throw new Error('Error, while fetching songs.');
    return 'this.songs;';
  }
}
