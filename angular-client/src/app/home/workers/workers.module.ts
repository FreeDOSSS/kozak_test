import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { WorkersComponent } from './workers.component';
import { AuthInterceptor } from 'src/app/shared/interceptor/auth.interceptor';
import { SetTokenInterceptor } from 'src/app/shared/interceptor/setToken.interceptor';

@NgModule({
  declarations: [WorkersComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SetTokenInterceptor,
      multi: true,
    },
  ],
})
export class WorkersModule {}
