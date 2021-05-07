import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './pin-entry.component.html',
  styleUrls: ['./pin-entry.component.scss']
})
export class PinEntryComponent implements OnInit {
  pin;
  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.clear();
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

}
