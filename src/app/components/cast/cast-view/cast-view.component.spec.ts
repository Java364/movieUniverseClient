import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastViewComponent } from './cast-view.component';

describe('CastViewComponent', () => {
  let component: CastViewComponent;
  let fixture: ComponentFixture<CastViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
