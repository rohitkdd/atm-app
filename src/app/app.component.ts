import { Component, OnInit, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentChecked{
  title = 'Smart Bank ATM';
  isCardInserted: boolean = false;

  constructor(private sharedService: SharedService, private changeDetection: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.sharedService.isCardInserted().subscribe((hasCardInserted) => {
      this.isCardInserted = hasCardInserted;
    });
  }

  ngAfterContentChecked(): void {
    this.changeDetection.detectChanges();
  }
}
