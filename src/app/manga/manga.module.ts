import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangaRoutingModule } from './manga-routing.module';
import { MangaComponent } from './manga.component';
import { MangaListComponent } from './pages/manga-list/manga-list.component';
import { SharedModule } from '../shared/shared.module';
import { MangaFormComponent } from './components/manga-form/manga-form.component';
import { MangaFormUpdateComponent } from './components/manga-form-update/manga-form-update.component';
import { MangaDetailsComponent } from './pages/manga-details/manga-details.component';
import { ChapterPageComponent } from './pages/chapter-page/chapter-page.component';
import { ChapitreFormComponent } from './components/chapitre-form/chapitre-form.component';
import { ChapitreFormUpdateComponent } from './components/chapitre-form-update/chapitre-form-update.component';


@NgModule({
  declarations: [MangaComponent, MangaListComponent, MangaFormComponent, MangaFormUpdateComponent, MangaDetailsComponent, ChapterPageComponent, ChapitreFormComponent, ChapitreFormUpdateComponent],
  imports: [
    CommonModule,
    MangaRoutingModule,
    SharedModule
  ]
})
export class MangaModule { }
