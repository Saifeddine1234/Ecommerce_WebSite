import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaaaaanewPageComponent } from './aaaaaanew-page.component';

describe('AaaaaanewPageComponent', () => {
  let component: AaaaaanewPageComponent;
  let fixture: ComponentFixture<AaaaaanewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaaaaanewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AaaaaanewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
