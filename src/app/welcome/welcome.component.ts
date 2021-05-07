import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.setCardInserted(false);
  }
}