import { Injectable, OnModuleInit } from '@nestjs/common';
import { heroServiceOptions } from './grpc-client-option';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { HeroesService } from './app.interface';
import { Observable } from 'rxjs';

@Injectable()
export class AppService implements OnModuleInit {
    
  @Client(heroServiceOptions)
  private heroClient: ClientGrpc

  private heroService: HeroesService

  onModuleInit() {
    this.heroService = this.heroClient.getService<HeroesService>('HeroesService');
  }

  getHero(): Observable<any> {
    return this.heroService.findOne({id: 1});
  }
}
