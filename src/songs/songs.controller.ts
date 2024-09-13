import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  // injecting service...
  constructor(private songsService: SongsService) {}

  @Post()
  create() {
    return this.songsService.create(
      'Sun sayaain tere Ishq dee khairaaa manayaaaa!',
    );
  }

  //get all listed songs...
  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  //   get songs on the base of id...
  @Get(':id')
  findOne() {
    return 'find one song on the base of Id';
  }

  //   update song on the base of id...
  @Put(':id')
  update() {
    return 'update song on the base of Id';
  }

  //   update song on the base of id...
  @Delete(':id')
  delete() {
    return 'delete song on the base of Id';
  }
}
