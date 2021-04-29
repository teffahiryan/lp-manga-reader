import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Manga } from '../core/models/manga';
import { MangaService } from '../core/services/http/manga.service';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.scss']
})
export class MangaComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

}
