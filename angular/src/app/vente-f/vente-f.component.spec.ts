import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteFComponent } from './vente-f.component';

describe('VenteFComponent', () => {
  let component: VenteFComponent;
  let fixture: ComponentFixture<VenteFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenteFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
