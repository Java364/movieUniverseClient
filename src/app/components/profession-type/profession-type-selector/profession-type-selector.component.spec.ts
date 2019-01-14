import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionTypeSelectorComponent } from './profession-type-selector.component';

describe('ProfessionTypeSelectorComponent', () => {
  let component: ProfessionTypeSelectorComponent;
  let fixture: ComponentFixture<ProfessionTypeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionTypeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
