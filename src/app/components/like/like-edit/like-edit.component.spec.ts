import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeEditComponent } from './like-edit.component';

describe('LikeEditComponent', () => {
  let component: LikeEditComponent;
  let fixture: ComponentFixture<LikeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
