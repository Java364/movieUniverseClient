import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviemarkComponent } from './moviemark.component';

describe('MoviemarkComponent', () => {
  let component: MoviemarkComponent;
  let fixture: ComponentFixture<MoviemarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviemarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviemarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
