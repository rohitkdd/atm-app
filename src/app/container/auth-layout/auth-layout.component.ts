import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit, OnDestroy {

  idleState = 'Not started.';
  lastPing?: Date = null;
  @ViewChild('timeoutModalBtn', {static: false}) timeoutModal: ElementRef;

  constructor(private idle: Idle, private keepAlive: Keepalive, private router: Router) {

    idle.setIdle(30);
    idle.setTimeout(10);
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => { 
      this.idleState = 'No longer idle.'
      this.reset();
    });
    
    idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.idle.stop();
      this.router.navigate(['/']);
    });
    
    idle.onIdleStart.subscribe(() => {
        this.idleState = 'You\'ve gone idle!'
        if (this.timeoutModal) {
          this.timeoutModal.nativeElement.click();
        }
    });
    
    idle.onTimeoutWarning.subscribe((countdown) => {
      this.idleState = 'You will time out in ' + countdown + ' seconds!'
    });

    keepAlive.interval(15);

    keepAlive.onPing.subscribe(() => this.lastPing = new Date());

    idle.watch();
  }

  ngOnInit() {
    this.idle.clearInterrupts();
  }
  
  reset() {
    this.idle.watch();
  }

  stay() {
    this.reset();
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    let body = document.querySelector('.modal-open');
    if (body) {
      body.classList.remove('modal-open');
      body.removeAttribute('class');
    }
    let modalBackdrop = document.querySelector('.modal-backdrop');
    if (modalBackdrop) {
      body.removeChild(modalBackdrop);
    }
    this.idle.stop();
  }
}
