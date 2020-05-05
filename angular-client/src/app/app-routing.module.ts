import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkersComponent } from './home/workers/workers.component';
import { WorkersModule } from './home/workers/workers.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'workers', component: WorkersComponent },
  // { path: 'workers', module: WorkersModule },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
