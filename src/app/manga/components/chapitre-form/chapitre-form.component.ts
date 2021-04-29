import { Component, OnInit, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Chapitre } from 'src/app/core/models/chapitre';
import { ChapitreService } from 'src/app/core/services/http/chapitre.service';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-chapitre-form',
  templateUrl: './chapitre-form.component.html',
  styleUrls: ['./chapitre-form.component.scss'],
})
export class ChapitreFormComponent implements OnInit {
  chapitreForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _chapitreService: ChapitreService,
    private _dialogRef: MatDialogRef<ChapitreFormComponent>,
    public dialog: MatDialog,
    private _location: Location,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.chapitreForm = this.fb.group({
      nom: ['', [Validators.required, this.noWhitespaceValidator]],
      pageCouverture: ['', [Validators.required, this.noWhitespaceValidator]],
      numero: ['', Validators.required],
      MangaId: [this.data.id],
    });
  }

  ngOnInit(): void {}

  onSubmit(chapitre: Chapitre) {
    if (this.chapitreForm.valid) {
      this._chapitreService.post(chapitre).subscribe((next) => {
        console.log('YES');
        this.chapitreForm.reset();
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
