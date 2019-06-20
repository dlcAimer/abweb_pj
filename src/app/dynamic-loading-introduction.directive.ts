import { Directive,  ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicLoadingIntroduction]'
})
export class DynamicLoadingIntroductionDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
