import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'booking', loadChildren: './booking/booking.module#BookingModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'manageroom', loadChildren: './manageroom/manageroom.module#ManageroomModule' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
