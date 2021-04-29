import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Manga } from 'src/app/core/models/manga';
import { MangaService } from 'src/app/core/services/http/manga.service';
import { Chapitre } from 'src/app/core/models/chapitre';
import { ChapitreService } from 'src/app/core/services/http/chapitre.service';
import { ChapitreFormUpdateComponent } from '../../components/chapitre-form-update/chapitre-form-update.component';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';

@Component({
  selector: 'app-chapter-page',
  templateUrl: './chapter-page.component.html',
  styleUrls: ['./chapter-page.component.scss'],
})
export class ChapterPageComponent implements OnInit {
  mangaIdc: number;
  mangac: Observable<Manga>;

  chapitreIdc: number;
  chapitrec: Observable<Chapitre>;

  constructor(
    private _activateRoute: ActivatedRoute,
    private _mangaService: MangaService,
    private _chapitreService: ChapitreService,
    public dialog: MatDialog,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.mangaIdc = Number(this._activateRoute.snapshot.paramMap.get('id'));

    if (this.mangaIdc) {
      this.fetchDataManga(this.mangaIdc);
    }

    this.chapitreIdc = Number(this._activateRoute.snapshot.paramMap.get('idC'));

    if (this.chapitreIdc) {
      this.fetchDataChapter(this.chapitreIdc);
    }
  }

  fetchDataManga(id: number): void {
    this.mangac = this._mangaService.getById(id);
  }

  fetchDataChapter(id: number): void {
    this.chapitrec = this._chapitreService.getById(id);
  }

  openDialogUpdate() {
    console.log('OPEN FORM UPDATE');

    const dialogRef = this.dialog.open(ChapitreFormUpdateComponent, {
      data: { id: this.chapitreIdc, idM: this.mangaIdc },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      window.location.reload();
    });
  }

  delete(id) {
    this._chapitreService.delete(id).subscribe((next) => {
      this.fetchData(this.chapitreIdc);
      this._location.back();
    });
  }

  fetchData(id: number): void {
    this.chapitrec = this._chapitreService.getById(id);
  }

  /*function Down(idPage){
    if(idPage == 1){
      doNothing 
      or 
      idChapter-- and redirection
    }else{
      idPage--
      redirection
    }
  }
  
  
  function Up(idPage){
    if(idPage >  listPages.lenght){
      doNothing 
      or 
      idChapter++ and redirection
    }else{
      idPage++
      redirection
    }
  }
  */
}
