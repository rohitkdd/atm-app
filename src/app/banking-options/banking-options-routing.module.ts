import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankingOptionsComponent } from './banking-options.component';

const routes: Routes = [{ path: '', component: BankingOptionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankingOptionsRoutingModule { }
