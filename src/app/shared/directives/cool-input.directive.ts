import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[coolInput]'
})
export class CoolInputDirective implements OnInit {

  @Input() coolInputDefaultBgColor: string = 'white';
  @Input() coolInputFocusBgColor: string = 'orange';

  constructor(private el: ElementRef,
              private rend: Renderer2) {
    // console.log(el.nativeElement.innerText);
    // console.log(el);
  }

  private _backgroundColor: string = '';
  @HostBinding('style.backgroundColor')
  get getBgColor() {
    return this._backgroundColor;
  }

  private _isOnFocus: boolean = false;
  @HostBinding('class.isOnFocus')
  get getIsOnFocus() {
    return this._isOnFocus;
  }

  @HostListener('focus') // фокус на инпут
  onFocus() {
    this.changeElementBgColor(this.coolInputFocusBgColor);
    // this.changeElementBgColor('orange');
    // this.rend.setStyle(this.el.nativeElement, 'background-color', 'orange');
    this._isOnFocus = true; // прифокусе добовляем класс
  }
  @HostListener('blur')  //эта потеря фокуса
  onBlur() {
    this.changeElementBgColor(this.coolInputDefaultBgColor);
    // this.changeElementBgColor('white');
    // this.rend.setStyle(this.el.nativeElement, 'background-color', 'white'); //сделали отдельную функцию для цвета
    this._isOnFocus = false; // при потере фокуса убираем класс
  }

  @HostListener('click', ['$event' , '$event.target'])
  onClick(event: Event, target: HTMLElement) {
    console.log(event);
    console.log(target);
  }

  ngOnInit() {
    // this.rend.setStyle(this.el.nativeElement, 'background-color', 'white');
    this.changeElementBgColor(this.coolInputDefaultBgColor);
    this.rend.setAttribute(this.el.nativeElement, 'placeholder',
      this.el.nativeElement.getAttribute('placeholder') + '*');

    // -------------------------- класс Renderer2 для работ с DOM ---------------------------------------------
    // const text = this.rend.createElement('span');
    // this.rend.setProperty(text, 'innerText', '*Обязательно для заполнения');
    // this.rend.setStyle(text, 'color', 'red');
    // this.rend.insertBefore(this.el.nativeElement.parentElement, text, this.rend.nextSibling(this.el.nativeElement));
    // // появится надпись под инпутами
    // this.el.nativeElement.style.backgroundColor = 'yellow';
    // console.log(this.el.nativeElement.innerText);
  }

  changeElementBgColor(color: string) {
    this._backgroundColor = color;
    // this.rend.setStyle(this.el.nativeElement, 'background-color', color);
  }

}
