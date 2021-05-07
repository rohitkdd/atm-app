import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankingOptionsRoutingModule } from './banking-options-routing.module';
import { BankingOptionsComponent } from './banking-options.component';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';
import { BalanceEnquiryComponent } from './components/balance-enquiry/balance-enquiry.component';


@NgModule({
  declarations: [BankingOptionsComponent, WithdrawalComponent, BalanceEnquiryComponent],
  imports: [
    CommonModule,
    BankingOptionsRoutingModule
  ]
})
export class BankingOptionsModule { }
