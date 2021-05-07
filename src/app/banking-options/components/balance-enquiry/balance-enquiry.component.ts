import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  templateUrl: './balance-enquiry.component.html',
  styleUrls: ['./balance-enquiry.component.scss']
})
export class BalanceEnquiryComponent implements OnInit {
  availableAmount = 5000;
  constructor(private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
  }

  leave() {
    localStorage.removeItem('pin');
    localStorage.setItem('balance-enquiry', (true).toString());
    this.sharedService.ejectCard();
    this.router.navigate(['/thank-you']);
  }

}
