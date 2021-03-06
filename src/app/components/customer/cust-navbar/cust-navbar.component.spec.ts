import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustNavbarComponent } from './cust-navbar.component';

describe('CustNavbarComponent', () => {
  let component: CustNavbarComponent;
  let fixture: ComponentFixture<CustNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
