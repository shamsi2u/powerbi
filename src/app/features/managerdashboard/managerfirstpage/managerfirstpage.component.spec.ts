import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerfirstpageComponent } from './managerfirstpage.component';

describe('ManagerfirstpageComponent', () => {
  let component: ManagerfirstpageComponent;
  let fixture: ComponentFixture<ManagerfirstpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerfirstpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerfirstpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
