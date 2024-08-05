import { ApplicationConfig } from '@angular/core';
import { UserStore } from './user.service';

export const appConfig: ApplicationConfig = {
  providers: [UserStore],
};
