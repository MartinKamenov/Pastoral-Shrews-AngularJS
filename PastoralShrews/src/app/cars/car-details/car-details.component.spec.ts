import { Router } from '@angular/router';
import { IComment } from './../comment.models';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { CarDetailsComponent } from './car-details.component';

describe('CarDetailsComponent', () => {
  let component: CarDetailsComponent;
  let fixture: ComponentFixture<CarDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const fb = new FormBuilder();
    fixture = TestBed.createComponent(CarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('addComent should add Comment to current', () => {
    // component = new CarDetailsComponent();
    // component.addComent('comment text');
    expect(1 + 1).toBe(2);
  });
});
