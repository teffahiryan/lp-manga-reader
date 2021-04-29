import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Manga } from 'src/app/core/models/manga';
import { MangaService } from 'src/app/core/services/http/manga.service';
import { MangaFormComponent } from '../../components/manga-form/manga-form.component';
import { MangaFormUpdateComponent } from '../../components/manga-form-update/manga-form-update.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.scss'],
})
export class MangaListComponent implements OnInit {
  mangas: Observable<Manga[]>;
  displayedColumns: string[] = ['id', 'nom', 'img', 'anneePubli'];

  constructor(private _mangaService: MangaService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.mangas = this._mangaService.get();
  }

  openDialog() {
    console.log('OPEN FORM');

    const dialogRef = this.dialog.open(MangaFormComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      window.location.reload();
    });
  }
}
