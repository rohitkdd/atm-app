import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking-options',
  templateUrl: './banking-options.component.html',
  styleUrls: ['./banking-options.component.scss'],
  animations: [
    trigger('slideIn', [
      state('void', style({
        opacity: 0
      })),
      transition('void => *', [
        style({
          transform: 'translateX(-20px)'
        }),
        animate(700)
      ]),

      transition('* => void', [
        animate(700)
      ])
    ])
  ]
})
export class BankingOptionsComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
  }

}
