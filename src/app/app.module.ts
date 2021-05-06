import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './container/auth-layout/auth-layout.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CardEntryComponent } from './card-entry/card-entry.component';
import { PinEntryComponent } from './pin-entry/pin-entry.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    WelcomeComponent,
    CardEntryComponent,
    PinEntryComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
