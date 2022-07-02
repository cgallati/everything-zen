import { generateCalendarData } from './testData';

describe('generateCalendarData', () => {
  it('should always return n months for argument of n', () => {
    let n = 1;
    let monthCount = generateCalendarData(n).months.length;
    expect(monthCount).toBe(n);

    n = 2;
    monthCount = generateCalendarData(n).months.length;
    expect(monthCount).toBe(n);

    n = 8;
    monthCount = generateCalendarData(n).months.length;
    expect(monthCount).toBe(n);
  });
});
