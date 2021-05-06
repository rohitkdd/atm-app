import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './container/auth-layout/auth-layout.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CardEntryComponent } from './card-entry/card-entry.component';
import { PinEntryComponent } from './pin-entry/pin-entry.component';
import { ThankYouComponent } from './thank-you/thank-you.component';


const routes: Routes = [
  {
    path: 'auth', component: AuthLayoutComponent, children: [
      { path: '', redirectTo: 'banking-options' , pathMatch: 'full'},
      { path: 'banking-options', loadChildren: () => import('./banking-options/banking-options.module').then(m => m.BankingOptionsModule) },
    ]
  },
  {
    path: 'welcome', component: WelcomeComponent
  },
  {
    path: 'card-entry', component: CardEntryComponent
  },
  {
    path: 'pin-entry', component: PinEntryComponent
  },
  {
    path: 'thank-you', component: ThankYouComponent
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
