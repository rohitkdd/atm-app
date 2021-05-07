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
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    WelcomeComponent,
    CardEntryComponent,
    PinEntryComponent,
    ThankYouComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgIdleKeepaliveModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
