import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkersComponent } from './workers.component';

@NgModule({
  declarations: [WorkersComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
})
export class WorkersModule {}