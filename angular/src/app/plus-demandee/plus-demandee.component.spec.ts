import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusDemandeeComponent } from './plus-demandee.component';

describe('PlusDemandeeComponent', () => {
  let component: PlusDemandeeComponent;
  let fixture: ComponentFixture<PlusDemandeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlusDemandeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlusDemandeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
