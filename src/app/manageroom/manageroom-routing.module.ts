import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageroomComponent } from './manageroom.component';


const routes: Routes = [
  { path: '', component: ManageroomComponent }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageroomRoutingModule { }
