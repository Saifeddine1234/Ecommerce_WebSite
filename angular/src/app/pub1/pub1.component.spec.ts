import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pub1Component } from './pub1.component';

describe('Pub1Component', () => {
  let component: Pub1Component;
  let fixture: ComponentFixture<Pub1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pub1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
