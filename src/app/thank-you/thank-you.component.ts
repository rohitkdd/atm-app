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
    ])
  ]
})
export class ThankYouComponent implements OnInit, OnDestroy {
  state = 'in';
  cashDispensed: number;
  constructor(private router: Router) { }

  ngOnInit() {
    this.cashDispensed = parseInt(localStorage.getItem('cashDispensed'), 10);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.state = 'out';
    }, 0);

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 7000);
  }

  onEnd(event) {
    this.state = 'out';
    if (event.toState === 'out') {
      this.state = 'in';
    }
  }

  ngOnDestroy(): void {
    localStorage.clear();
  }

}
