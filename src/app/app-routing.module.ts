import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './container/auth-layout/auth-layout.component';


const routes: Routes = [
  {
    path: 'auth', component: AuthLayoutComponent, children: [
      { path: '', redirectTo: 'banking-options' , pathMatch: 'full'},
      { path: 'banking-options', loadChildren: () => import('./banking-options/banking-options.module').then(m => m.BankingOptionsModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
