import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongsDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
  // injecting service...
  constructor(private songsService: SongsService) {}

  @Post()
  create(@Body() createSongDTO: CreateSongsDTO) {
    return this.songsService.create(createSongDTO);
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
