import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapitreFormUpdateComponent } from './chapitre-form-update.component';

describe('ChapitreFormUpdateComponent', () => {
  let component: ChapitreFormUpdateComponent;
  let fixture: ComponentFixture<ChapitreFormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapitreFormUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapitreFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
