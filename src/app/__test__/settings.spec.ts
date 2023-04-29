import '@angular/compiler';
import { ClockService } from '../services/clock.service';
import { SettingsComponent } from '../settings/settings.component';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let clockService: ClockService;

  beforeEach(() => {
    clockService = new ClockService();
    component = new SettingsComponent(clockService);
  });

  afterEach(() => {
    component.ngOnDestroy();
  });

  it('should increment the time when incrementTime is called', () => {
    const spy = jest.spyOn(clockService, 'incrementTime');
    component.incrementTime();
    expect(spy).toHaveBeenCalled();
  });

  it('should decrement the time when decrementTime is called', () => {
    const spy = jest.spyOn(clockService, 'decrementTime');
    component.decrementTime();
    expect(spy).toHaveBeenCalled();
  });

  it('should set the time to the current time when resetTime is called', () => {
    const now = new Date();
    const spy = jest.spyOn(clockService, 'setTime');
    component.resetTime();
    expect(spy).toHaveBeenCalledWith(now);
  });
});
