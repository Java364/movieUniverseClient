import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentSelectorComponent } from './comment-selector.component';

describe('CommentSelectorComponent', () => {
  let component: CommentSelectorComponent;
  let fixture: ComponentFixture<CommentSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
