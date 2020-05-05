import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
})
export class HomeModule {}
