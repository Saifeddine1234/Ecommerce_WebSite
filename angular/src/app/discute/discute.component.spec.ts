import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscuteComponent } from './discute.component';

describe('DiscuteComponent', () => {
  let component: DiscuteComponent;
  let fixture: ComponentFixture<DiscuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscuteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
