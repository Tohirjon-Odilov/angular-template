import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(message: string) {
    if (!environment.production) {
      console.log(`[Log]: ${message}`);
    }
  }

  warn(message: string) {
    if (!environment.production) {
      console.warn(`[Warning]: ${message}`);
    }
  }

  error(message: string) {
    console.error(`[Error]: ${message}`);  // Xatolarni har doim ko'rsatish
  }

  info(message: string) {
    if (!environment.production) {
      console.info(`[Info]: ${message}`);
    }
  }

  debug(message: string) {
    if (!environment.production) {
      console.debug(`[Debug]: ${message}`);
    }
  }
}
