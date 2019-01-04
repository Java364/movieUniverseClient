import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionViewComponent } from './profession-view.component';

describe('ProfessionViewComponent', () => {
  let component: ProfessionViewComponent;
  let fixture: ComponentFixture<ProfessionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
