import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarViewComponent } from './avatar-view.component';

describe('AvatarViewComponent', () => {
  let component: AvatarViewComponent;
  let fixture: ComponentFixture<AvatarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
