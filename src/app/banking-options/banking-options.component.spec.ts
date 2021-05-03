import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingOptionsComponent } from './banking-options.component';

describe('BankingOptionsComponent', () => {
  let component: BankingOptionsComponent;
  let fixture: ComponentFixture<BankingOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
