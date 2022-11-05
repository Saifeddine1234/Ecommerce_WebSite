import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubHorizontalComponent } from './pub-horizontal.component';

describe('PubHorizontalComponent', () => {
  let component: PubHorizontalComponent;
  let fixture: ComponentFixture<PubHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
