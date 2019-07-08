import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[OnlyNumber]'
})
export class OnlyNumber {

 @Input() OnlyNumber: string;
   modelElement: any;

  constructor(private el: ElementRef) {
     this.modelElement = this.el.nativeElement;
   }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {

    let e = <KeyboardEvent>event;
    
      let keyCodeArray = [109,189,46, 8, 9, 27, 13, 110, 190];  //Allow minus - sign
    
      if(this.OnlyNumber !== "true")
       {
          keyCodeArray.splice(0,2);
       }
    
    if (keyCodeArray.indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode == 65 && e.ctrlKey === true) ||
      // Allow: Ctrl+C
      (e.keyCode == 67 && e.ctrlKey === true) ||
      // Allow: Ctrl+X
      (e.keyCode == 88 && e.ctrlKey === true) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)  
     
     ) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
     //if ((e.shiftKey ||  (e.keyCode < 45 || e.keyCode == 46 || e.keyCode == 47 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
     if ((e.shiftKey ||  (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  }
}