import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastCarsComponent } from './last-cars.component';

describe('LastCarsComponent', () => {
  let component: LastCarsComponent;
  let fixture: ComponentFixture<LastCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
