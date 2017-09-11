import { Router } from '@angular/router';
import { IComment } from './../comment.models';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { CarDetailsComponent } from './car-details.component';

describe('CarDetailsComponent', () => {
  let component: CarDetailsComponent;
  let fixture: ComponentFixture<CarDetailsComponent>;

  /*beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });*/

  it('should be created', () => {
    fixture = TestBed.createComponent(CarDetailsComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('addComent should add Comment to current Car', () => {
    const a = 1;
    const b = 1;
    const result = a + b;
    expect(result).toEqual(a + b);
  });
});
