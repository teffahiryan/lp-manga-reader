import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Manga } from 'src/app/core/models/manga';
import { MangaService } from 'src/app/core/services/http/manga.service';
import { Chapitre } from 'src/app/core/models/chapitre';
import { ChapitreService } from 'src/app/core/services/http/chapitre.service';
import { MangaFormUpdateComponent } from '../../components/manga-form-update/manga-form-update.component';
import { ChapitreFormComponent } from '../../components/chapitre-form/chapitre-form.component';
import { ChapitreListComponent } from '../../../chapitre/pages/chapitre-list/chapitre-list.component';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manga-details',
  templateUrl: './manga-details.component.html',
  styleUrls: ['./manga-details.component.scss'],
})
export class MangaDetailsComponent implements OnInit {
  mangaId: number;

  manga: Observable<Manga>;
  chapitres: Observable<Chapitre[]>;

  constructor(
    private _activateRoute: ActivatedRoute,
    private _mangaService: MangaService,
    private _chapitreService: ChapitreService,
    public dialog: MatDialog,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.mangaId = Number(this._activateRoute.snapshot.paramMap.get('id'));

    this.chapitres = this._chapitreService.getByIdList(
      this.mangaId
    );

    if (this.mangaId) {
      this.fetchData(this.mangaId);
    }
  }

  fetchData(id: number): void {
    this.manga = this._mangaService.getById(id);
  }

  openDialogUpdate() {
    console.log('OPEN FORM UPDATE');

    const dialogRef = this.dialog.open(MangaFormUpdateComponent, {
      data: { id: this.mangaId },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      window.location.reload();
    });
  }

  delete(id) {
    this._mangaService.delete(id).subscribe((next) => {
      this.fetchData(this.mangaId);
      this._location.back();
    });
  }

  openDialog() {
    console.log('OPEN FORM');

    const dialogRef = this.dialog.open(ChapitreFormComponent, {
      data: { id: this.mangaId },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      window.location.reload();
    });
  }
}
