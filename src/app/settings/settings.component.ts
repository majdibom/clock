import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ClockService } from '../services/clock.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  timeFormControl = new FormControl('');
  private timeSubscription: Subscription = new Subscription();

  constructor(private clockService: ClockService) {}

  ngOnInit(): void {
    this.timeSubscription = this.clockService.getTime().subscribe((date) => {
      this.timeFormControl.setValue(date.toISOString().substr(11, 8), {
        emitEvent: false,
      });
    });
  }

  ngOnDestroy(): void {
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }
  incrementTime(): void {
    this.clockService.incrementTime();
  }

  decrementTime(): void {
    this.clockService.decrementTime();
  }

  resetTime(): void {
    this.clockService.setTime(new Date());
  }
}
