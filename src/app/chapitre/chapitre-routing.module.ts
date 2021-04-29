import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { ChapitreListComponent } from './pages/chapitre-list/chapitre-list.component';
import { ChapitreComponent } from './chapitre.component';

const routes: Routes = [
  {
    path: '',
    component: ChapitreComponent,
    children: [
      {
        path: 'chapitre',
        component: ChapitreListComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: '**', 
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChapitreRoutingModule { }
