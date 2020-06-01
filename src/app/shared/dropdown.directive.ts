import { Directive, HostListener, HostBinding, } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  //Used class.show instead of class.open for updated version of bootstrap
  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }


}
