import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapitreRoutingModule } from './chapitre-routing.module';
import { ChapitreComponent } from './chapitre.component';
import { ChapitreListComponent } from './pages/chapitre-list/chapitre-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ChapitreComponent, ChapitreListComponent],
  imports: [
    CommonModule,
    ChapitreRoutingModule,
    SharedModule
  ]
})
export class ChapitreModule { }
