import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Manga } from 'src/app/core/models/manga';
import { MangaService } from 'src/app/core/services/http/manga.service';

@Component({
  selector: 'app-manga-form',
  templateUrl: './manga-form.component.html',
  styleUrls: ['./manga-form.component.scss'],
})
export class MangaFormComponent implements OnInit {
  mangaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _mangaService: MangaService,
    private _dialogRef: MatDialogRef<MangaFormComponent>
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

  ngOnInit(): void {}

  onSubmit(manga: Manga) {
    if (this.mangaForm.valid) {
      this._mangaService.post(manga).subscribe((next) => {
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
