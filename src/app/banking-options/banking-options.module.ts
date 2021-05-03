import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankingOptionsRoutingModule } from './banking-options-routing.module';
import { BankingOptionsComponent } from './banking-options.component';


@NgModule({
  declarations: [BankingOptionsComponent],
  imports: [
    CommonModule,
    BankingOptionsRoutingModule
  ]
})
export class BankingOptionsModule { }
