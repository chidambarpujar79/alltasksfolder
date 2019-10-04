import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarddisplayComponent } from './carddisplay.component';

describe('CarddisplayComponent', () => {
  let component: CarddisplayComponent;
  let fixture: ComponentFixture<CarddisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarddisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarddisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
