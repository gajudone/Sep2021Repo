import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'button'
})
export class SampleDirective {

  constructor() { }

  @HostListener('click') click(){ alert("sdsfsasdafsad");}

}
