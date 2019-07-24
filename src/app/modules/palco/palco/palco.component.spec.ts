import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalcoComponent } from './palco.component';

describe('PalcoComponent', () => {
  let component: PalcoComponent;
  let fixture: ComponentFixture<PalcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
