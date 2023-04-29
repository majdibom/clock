import { first } from 'rxjs';
import { ClockService } from '../services/clock.service';

describe('ClockService', () => {
  let service: ClockService;

  beforeEach(() => {
    service = new ClockService();
  });

  it('should return the current time', (done) => {
    service.getTime().subscribe((time) => {
      expect(time).toBeInstanceOf(Date);
      done();
    });
  });

  it('should set a new time', () => {
    const newTime = new Date('2022-01-01T00:00:00');
    service.setTime(newTime);
    service.getTime().subscribe((time) => {
      expect(time).toEqual(newTime);
    });
  });

  it('should increment the time by 1 minute', (done) => {
    service
      .getTime()
      .pipe(first())
      .subscribe((originalTime) => {
        service.incrementTime();
        service.getTime().subscribe((newTime) => {
          expect(newTime).toEqual(new Date(originalTime.getTime() + 60000));
          done();
        });
      });
  });

  it('should decrement the time by 1 minute', (done) => {
    service
      .getTime()
      .pipe(first())
      .subscribe((originalTime) => {
        service.decrementTime();
        service.getTime().subscribe((newTime) => {
          expect(newTime).toEqual(new Date(originalTime.getTime() - 60000));
          done();
        });
      });
  });
});
