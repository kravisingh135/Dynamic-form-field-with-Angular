import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeadingColor]'
})
export class HeadingColorDirective {

  constructor(public element: ElementRef) {}
   ngOnInit(){
    this.element.nativeElement.classList.add('gray-fade');
    console.log('element --> ', this.element);
   }

}
