import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionTypeEditorComponent } from './profession-type-editor.component';

describe('ProfessionTypeEditorComponent', () => {
  let component: ProfessionTypeEditorComponent;
  let fixture: ComponentFixture<ProfessionTypeEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionTypeEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionTypeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
