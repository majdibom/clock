import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClockService } from '../services/clock.service';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss'],
})
export class AnalogClockComponent implements OnInit, OnDestroy {
  hourHandAngle: string = '';
  minuteHandAngle: string = '';
  secondHandAngle: string = '';

  clockSubscription: Subscription = new Subscription();

  constructor(private clockService: ClockService) {}

  ngOnInit(): void {
    this.clockSubscription = this.clockService
      .getTime()
      .subscribe((date: Date) => {
        this.updateAnalogClock(date);
      });
  }

  ngOnDestroy(): void {
    this.clockSubscription.unsubscribe();
  }

  public updateAnalogClock(date: Date): void {
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const hourAngle = hour * 30 + minute / 2;
    const minuteAngle = minute * 6;
    const secondAngle = second * 6;

    this.hourHandAngle = `rotate(${hourAngle}deg)`;
    this.minuteHandAngle = `rotate(${minuteAngle}deg)`;
    this.secondHandAngle = `rotate(${secondAngle}deg)`;
  }
}
