import { getHeaders, getMonthStartPad } from './utils';
import { generateCalendarData } from './testData';

describe('getMonthStartPad', () => {
  it('should calculate the correct pad for the day I wrote this test', () => {
    const pad = getMonthStartPad(new Date(2022, 1, 19));
    const expectedPad = 2;
    expect(pad).toBe(expectedPad);
  });
  it('should calculate the correct pad for another month', () => {
    const pad = getMonthStartPad(new Date(2022, 10, 1));
    const expectedPad = 2;
    expect(pad).toBe(expectedPad);
  });
  it('should calculate the correct pad for another year and month', () => {
    const pad = getMonthStartPad(new Date(1998, 3, 1));
    const expectedPad = 3;
    expect(pad).toBe(expectedPad);
  });
});

describe('getHeaders', () => {
  it('should always return n+2 headers for n months', () => {
    let n = 1;
    let headers = getHeaders(generateCalendarData(n).months);
    expect(headers.length).toBe(n + 2);

    n = 2;
    headers = getHeaders(generateCalendarData(n).months);
    expect(headers.length).toBe(n + 2);

    n = 8;
    headers = getHeaders(generateCalendarData(n).months);
    expect(headers.length).toBe(n + 2);
  });
});
