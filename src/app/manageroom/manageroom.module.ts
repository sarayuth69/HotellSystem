import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageroomRoutingModule } from './manageroom-routing.module';
import { ManageroomComponent } from './manageroom.component';


@NgModule({
  declarations: [ManageroomComponent],
  imports: [
    CommonModule,
    ManageroomRoutingModule
  ]
})
export class ManageroomModule { }
