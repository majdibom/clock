import { DigitalClockComponent } from '../digital-clock/digital-clock.component';
import { ClockService } from '../services/clock.service';

describe('DigitalClockComponent', () => {
  let component: DigitalClockComponent;
  let clockService: ClockService;

  beforeEach(() => {
    clockService = new ClockService();
    component = new DigitalClockComponent(clockService);
  });

  afterEach(() => {
    component.ngOnDestroy();
  });

  it('should set the current time when initialized', () => {
    component.ngOnInit();

    clockService.getTime().subscribe((date) => {
      expect(component.currentTime).toEqual(date);
    });
  });
});
