import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Manga } from 'src/app/core/models/manga';
import { MangaService } from 'src/app/core/services/http/manga.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manga-form-update',
  templateUrl: './manga-form-update.component.html',
  styleUrls: ['./manga-form-update.component.scss'],
})
export class MangaFormUpdateComponent implements OnInit {
  mangaId: number;
  mangaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _mangaService: MangaService,
    private _dialogRef: MatDialogRef<MangaFormUpdateComponent>,
    private _activateRoute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.mangaForm = this.fb.group({
      nom: ['', [Validators.required, this.noWhitespaceValidator]],
      img: ['', [Validators.required, this.noWhitespaceValidator]],
      anneePubli: ['', Validators.required],
      genre: ['', [Validators.required, this.noWhitespaceValidator]],
      type: ['', [Validators.required, this.noWhitespaceValidator]],
      statut: ['', [Validators.required, this.noWhitespaceValidator]],
    });
  }

  ngOnInit(): void {
    this.mangaId = Number(this._activateRoute.snapshot.paramMap.get('id'));
  }

  onSubmit(manga: Manga) {
    if (this.mangaForm.valid) {
      this._mangaService.put(manga, this.data.id).subscribe((next) => {
        console.log('YES');
        this.mangaForm.reset();
        this._dialogRef.close();
      });
    }
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;

    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }
}
