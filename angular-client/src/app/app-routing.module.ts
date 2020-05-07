import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkersComponent } from './home/workers/workers.component';
import { IsActiveGuard } from './shared/guard/isAuth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'workers',
    component: WorkersComponent,
    canActivate: [IsActiveGuard],
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
