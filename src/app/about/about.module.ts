import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AboutComponent } from './about.component';
import { RouterModule,Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
        {
            path:'',
            component:AboutComponent
        }
    ]),
    ChartsModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
