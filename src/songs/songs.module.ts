import { Module, Param } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { Connection } from 'src/common/constants/connection';

const mockService = {
  findAll() {
    return [{ id: 1, title: 'Lasting Lover', artist: ['Arjit Singh'] }];
  },
};

@Module({
  controllers: [SongsController],
  providers: [
    SongsService,

    // for mock data... for testing purposes...
    {
      provide: SongsService,
      useValue: mockService,
    },

    // for constants...
    {
      provide: 'CONNECTION',
      useValue: Connection,
    },
  ],
})
export class SongsModule {}
