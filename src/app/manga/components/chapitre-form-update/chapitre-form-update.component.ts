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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapitre-form-update',
  templateUrl: './chapitre-form-update.component.html',
  styleUrls: ['./chapitre-form-update.component.scss'],
})
export class ChapitreFormUpdateComponent implements OnInit {
  chapitreId: number;
  chapitreForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _chapitreService: ChapitreService,
    private _dialogRef: MatDialogRef<ChapitreFormUpdateComponent>,
    private _activateRoute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.chapitreForm = this.fb.group({
      nom: ['', [Validators.required, this.noWhitespaceValidator]],
      pageCouverture: ['', [Validators.required, this.noWhitespaceValidator]],
      numero: ['', Validators.required],
      MangaId: [this.data.idM],
    });
  }

  ngOnInit(): void {
    this.chapitreId = Number(this._activateRoute.snapshot.paramMap.get('id'));
  }

  onSubmit(chapitre: Chapitre) {
    if (this.chapitreForm.valid) {
      this._chapitreService.put(chapitre, this.data.id).subscribe((next) => {
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
