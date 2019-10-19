import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageroomRoutingModule } from './manageroom-routing.module';
import { ManageroomComponent } from './manageroom.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ManageroomComponent],
  imports: [
    CommonModule,
    ManageroomRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManageroomModule { }
