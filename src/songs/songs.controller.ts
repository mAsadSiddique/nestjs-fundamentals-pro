import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Scope,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongsDTO } from './dto/create-song-dto';
import { Connection } from 'src/common/constants/connection';

@Controller({
  path: 'songs',
  scope: Scope.TRANSIENT,
})
export class SongsController {
  // injecting service...
  constructor(
    private songsService: SongsService,
    @Inject('CONNECTION') private connection: Connection,
  ) {
    console.log('connection', this.connection);
  }

  @Post()
  create(@Body() createSongDTO: CreateSongsDTO) {
    return this.songsService.create(createSongDTO);
  }

  //get all listed songs...
  @Get()
  findAll() {
    try {
      return this.songsService.findAll();
    } catch (error) {
      throw new HttpException(
        "It's server error",
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  //   get songs on the base of id...
  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: string,
  ) {
    return `find one song on the base of Id ${typeof id}`;
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
