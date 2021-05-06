import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankingOptionsComponent } from './banking-options.component';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';

const routes: Routes = [
  
    {
      path: '',
      component: BankingOptionsComponent,
    },
    {
      path: 'withdrawal',
      component: WithdrawalComponent,
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankingOptionsRoutingModule { }
