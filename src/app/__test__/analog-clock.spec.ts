import { AnalogClockComponent } from '../analog-clock/analog-clock.component';
import { ClockService } from '../services/clock.service';

describe('AnalogClockComponent', () => {
  let component: AnalogClockComponent;
  let clockService: ClockService;

  beforeEach(() => {
    clockService = new ClockService();
    component = new AnalogClockComponent(clockService);
  });

  afterEach(() => {
    component.ngOnDestroy();
  });

  it('should update the clock hands with the correct angles', () => {
    const date = new Date(2023, 3, 1, 13, 45, 30);
    component.updateAnalogClock(date);
    expect(component.hourHandAngle).toEqual(`rotate(${13 * 30 + 45 / 2}deg)`);
    expect(component.minuteHandAngle).toEqual(`rotate(${45 * 6}deg)`);
    expect(component.secondHandAngle).toEqual(`rotate(${30 * 6}deg)`);
  });
});
