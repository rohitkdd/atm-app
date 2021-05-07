import { Component, OnDestroy, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss'],
  animations: [
    trigger('takeOut', [
      state('in', style({opacity: 0.3, transform: 'translateY(-5%)'})),
      transition('in => out', animate('3s linear')),
    ]),
    trigger('fade', [
      state('in', style({opacity: 1, textAlign: 'center'})),
      state('out', style({opacity: 0.3, textAlign: 'center'})),
      transition('in => out', animate('3s linear')),
      transition('out => in', animate('1s linear'))
    ])
  ]
})
export class ThankYouComponent implements OnInit, OnDestroy {
  state = 'in';
  fadeState = 'out';
  cashDispensed: number;
  isBalanceEnquiry: boolean = false;
  isOptionChosen: boolean = false;
  hasRequestedReceipt: boolean = false;
  isGoGreenSelected: boolean = false;
  isCardEjected: boolean = false;
  timer;

  constructor(private router: Router) { }

  ngOnInit() {
    this.cashDispensed = parseInt(localStorage.getItem('cashDispensed'), 10);
    
    if (this.cashDispensed) {
      this.timer = setTimeout(() => {
        this.showEjectedCard();
        this.cashDispensed = 0;
        localStorage.removeItem('cashDispensed');
      }, 7000);
    } else if (localStorage.getItem('balance-enquiry') && localStorage.getItem('balance-enquiry') === 'true') {
      this.isBalanceEnquiry = true;
      this.timer = setTimeout(() => {
        this.goGreen();
        localStorage.removeItem('balance-enquiry');
      }, 10000);
    } else if ((!this.cashDispensed && !this.isBalanceEnquiry) && localStorage.getItem('isCardEjected') && localStorage.getItem('isCardEjected') == 'true') {
      this.showEjectedCard();
    } 
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.state = 'out';
      this.fadeState = 'in';
    }, 0);
  }

  onEnd(event) {
    this.state = 'out';
    if (event.toState === 'out') {
      this.state = 'in';
    }
  }

  onFadeEnd(event) {
    this.fadeState = 'in';
    if (event.toState === 'in') {
      this.fadeState = 'out';
    }
  }
  
  showReceiptOnly() {
    this.isBalanceEnquiry = false;
    this.isOptionChosen = true;
    this.hasRequestedReceipt = true;
    
    this.timer = setTimeout(() => {
      this.showEjectedCard();
    }, 7000);
  }

  goGreen() {
    this.isBalanceEnquiry = false;
    this.isGoGreenSelected = true;
    this.isOptionChosen = true;
    
    this.timer = setTimeout(() => {
      this.showEjectedCard();
    }, 7000);
  }

  showEjectedCard() {
    this.isCardEjected = true;
    this.goHome();
  }

  goHome() {
    this.timer = setTimeout(() => {
      this.isCardEjected = false;
      this.router.navigate(['/']);
    }, 7000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
    localStorage.clear();
  }

}
