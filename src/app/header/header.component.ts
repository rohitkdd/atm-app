import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sharedService: SharedService, private router: Router) { }

  ngOnInit() {
  }

  ejectCard() {
    this.sharedService.ejectCard();
    this.router.navigate(['/thank-you']);
  }
}
