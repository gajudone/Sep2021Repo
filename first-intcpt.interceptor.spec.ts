import { TestBed } from '@angular/core/testing';

import { FirstIntcptInterceptor } from './first-intcpt.interceptor';

describe('FirstIntcptInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FirstIntcptInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FirstIntcptInterceptor = TestBed.inject(FirstIntcptInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
