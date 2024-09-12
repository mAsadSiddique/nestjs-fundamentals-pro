import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Post()
  create() {}

  //get all listed songs...
  @Get()
  findAll() {
    return 'find all songs';
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
