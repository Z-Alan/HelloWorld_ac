import { Injectable } from '@angular/core';

@Injectable()
export class HelloWorldService {

  constructor() { }

  /**
   * getWorldSky: 得到worldSky信息
   * @param name world-sky的状态
   * @return create worldSky true or create worldSky false
   * */
  getWorldSky(name: string) {
    if (name !== 'zhou') {
      return false;
    } else {
      return true;
    }
  }


}
