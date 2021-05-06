import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss']
})
export class WithdrawalComponent implements OnInit {

  constructor(private router: Router) { }
  denominations = [100, 200, 500, 1000, 2000, 3000, 4000, 5000, 10000];

  ngOnInit() {

  }

  dispenseCash(amount) {
    alert('Dispensed amount is ' + amount);
    this.router.navigate(['/thank-you']);
  }

}
