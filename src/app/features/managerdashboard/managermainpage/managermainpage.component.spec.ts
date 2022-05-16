import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagermainpageComponent } from './managermainpage.component';

describe('ManagermainpageComponent', () => {
  let component: ManagermainpageComponent;
  let fixture: ComponentFixture<ManagermainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagermainpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagermainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
