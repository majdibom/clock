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
});
