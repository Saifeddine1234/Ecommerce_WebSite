import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubHorizontal2Component } from './pub-horizontal2.component';

describe('PubHorizontal2Component', () => {
  let component: PubHorizontal2Component;
  let fixture: ComponentFixture<PubHorizontal2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubHorizontal2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubHorizontal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
