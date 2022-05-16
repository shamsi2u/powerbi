import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpforecastComponent } from './gpforecast.component';

describe('GpforecastComponent', () => {
  let component: GpforecastComponent;
  let fixture: ComponentFixture<GpforecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpforecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpforecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
