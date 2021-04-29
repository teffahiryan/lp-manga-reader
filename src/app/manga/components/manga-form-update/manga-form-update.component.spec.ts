import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaFormUpdateComponent } from './manga-form-update.component';

describe('MangaFormUpdateComponent', () => {
  let component: MangaFormUpdateComponent;
  let fixture: ComponentFixture<MangaFormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangaFormUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
