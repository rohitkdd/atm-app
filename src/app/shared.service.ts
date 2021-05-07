import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private cardInserted: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    if (localStorage.getItem('isCardInserted') && localStorage.getItem('isCardInserted') === 'true') {
      this.setCardInserted(true);
    }
  }

  setCardInserted(isCardInserted: boolean) {
    localStorage.setItem('isCardInserted', isCardInserted.toString());
    this.cardInserted.next(isCardInserted);
  }

  isCardInserted(): Observable<boolean> {
    return this.cardInserted.asObservable();
  }

  ejectCard() {
    this.setCardInserted(false);
    localStorage.setItem('isCardEjected', 'true');
  }
}
