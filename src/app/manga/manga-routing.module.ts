import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { MangaListComponent } from './pages/manga-list/manga-list.component';
import { MangaDetailsComponent } from './pages/manga-details/manga-details.component';
import { ChapterPageComponent } from './pages/chapter-page/chapter-page.component';
import { MangaComponent } from './manga.component';

const routes: Routes = [
  {
    path: '',
    component: MangaComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'mangas',
      },
      {
        path: 'mangas',
        component: MangaListComponent,
      },
      {
        path: 'mangas/:id',
        component: MangaDetailsComponent,
      },
      {
        path: 'mangas/:id/chapter/:idC',
        component: ChapterPageComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangaRoutingModule {}
