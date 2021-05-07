import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './../shared.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './pin-entry.component.html',
  styleUrls: ['./pin-entry.component.scss']
})
export class PinEntryComponent implements OnInit, OnDestroy {
  pin;
  cardInsertedSubscription: Subscription;
  constructor(private sharedService: SharedService, private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('pin');
    this.cardInsertedSubscription = this.sharedService.isCardInserted().subscribe((hasCardInserted) => {
      if (!hasCardInserted) {
        this.router.navigate(['/']);
      }
    });
  }

  proceed() {
    if (this.pin) {
      localStorage.setItem('pin', this.pin);
      this.router.navigate(['/auth']);
    }
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode === 13) {
      return true;
    } else if (charCode < 48 || charCode > 57) {
      return false;
    } 
    return true;
  }

  ngOnDestroy(): void {
    this.cardInsertedSubscription.unsubscribe();
  }

}
