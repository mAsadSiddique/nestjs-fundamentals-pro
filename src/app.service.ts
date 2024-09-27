import { Injectable } from '@nestjs/common';
import { DevConfigService } from './common/providers/devConfigService';

@Injectable()
export class AppService {
  constructor(private devConfigService: DevConfigService) {}

  getHello(): string {
    return `Hello am learning nestjs fundamental ${this.devConfigService.getDBHOST()}`;
  }
}
