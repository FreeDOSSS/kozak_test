import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { WorkersModule } from './home/workers/workers.module';
import { IsActiveGuard } from './shared/guard/isAuth.guard';
import { AuthService } from './shared/services/auth.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    WorkersModule,
  ],
  providers: [AuthService, IsActiveGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
