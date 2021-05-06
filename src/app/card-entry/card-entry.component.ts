import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  templateUrl: './card-entry.component.html',
  styleUrls: ['./card-entry.component.scss'],
  animations: [
    trigger('cardEntry', [
      state('in', style({opacity: 0.2, transform: 'translateY(-2%)'})),
      state('out', style({opacity: 1, transform: 'translateY(10%)'})),
      transition('in => out', animate('3s linear')),
      transition('out => in', animate('3s linear'))
    ])
  ]
})
export class CardEntryComponent implements OnInit {
  state = 'out';
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.state = 'in';
    }, 0);
  }

  onEnd(event) {
    this.state = 'out';
    if (event.toState === 'out') {
      setTimeout(() => {
        this.state = 'in';
      }, 0);
    }
  }

}
