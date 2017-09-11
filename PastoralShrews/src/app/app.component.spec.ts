import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component;
  beforeEach(async(() => {
    component = new AppComponent();
  }));

  it('to be defined', async(() => {
    expect(component).toBeDefined();
  }));
});
