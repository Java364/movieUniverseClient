import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeViewComponent } from './like-view.component';

describe('LikeViewComponent', () => {
  let component: LikeViewComponent;
  let fixture: ComponentFixture<LikeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
