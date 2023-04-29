import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  private time$ = new BehaviorSubject<Date>(new Date());

  constructor() {
    interval(1000).subscribe(() => {
      const currentTime = this.time$.getValue();
      const newTime = new Date(currentTime.getTime() + 1000);
      this.time$.next(newTime);
    });
  }

  getTime() {
    return this.time$.asObservable();
  }

  setTime(newTime: Date) {
    this.time$.next(newTime);
  }

  incrementTime() {
    const currentTime = this.time$.getValue();
    const newTime = new Date(currentTime.getTime() + 60000);
    this.time$.next(newTime);
  }

  decrementTime() {
    const currentTime = this.time$.getValue();
    const newTime = new Date(currentTime.getTime() - 60000);
    this.time$.next(newTime);
  }
}
