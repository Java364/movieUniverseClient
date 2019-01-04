import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviemarkViewComponent } from './moviemark-view.component';

describe('MoviemarkViewComponent', () => {
  let component: MoviemarkViewComponent;
  let fixture: ComponentFixture<MoviemarkViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviemarkViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviemarkViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
