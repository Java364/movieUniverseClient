import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviemarkEditComponent } from './moviemark-edit.component';

describe('MoviemarkEditComponent', () => {
  let component: MoviemarkEditComponent;
  let fixture: ComponentFixture<MoviemarkEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviemarkEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviemarkEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
