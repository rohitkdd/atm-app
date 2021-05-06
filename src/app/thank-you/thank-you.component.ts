import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss'],
  animations: [
    trigger('takeOut', [
      state('in', style({opacity: 0.2, transform: 'translateY(-5%)'})),
      transition('in => out', animate('3s linear')),
    ])
  ]
})
export class ThankYouComponent implements OnInit {
  state = 'in';
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.state = 'out';
    }, 0);
  }

  onEnd(event) {
    this.state = 'in';
    if (event.toState === 'in') {
      setTimeout(() => {
        this.state = 'out';
      }, 0);
    }
  }

}
