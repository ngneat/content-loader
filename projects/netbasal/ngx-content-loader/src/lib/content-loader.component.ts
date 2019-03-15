import { Component, Input, OnInit } from '@angular/core';

function uid() {
  return Math.random()
    .toString(36)
    .substring(2);
}

@Component({
  selector: 'content-loader',
  templateUrl: './content-loader.component.html'
})
export class ContentLoaderComponent implements OnInit {
  @Input()
  animate = true;
  @Input()
  width = 400;
  @Input()
  height = 130;
  @Input()
  speed = 2;
  @Input()
  preserveAspectRatio = 'xMidYMid meet';
  @Input()
  primaryColor = '#f9f9f9';
  @Input()
  secondaryColor = '#ecebeb';
  @Input()
  primaryOpacity = 1;
  @Input()
  secondaryOpacity = 1;
  @Input()
  uniqueKey;
  @Input()
  rtl;
  @Input()
  style;
  idClip = uid();
  idGradient = uid();

  defautlAnimation = ['-3; 1', '-2; 2', '-1; 3'];
  rtlAnimation = ['1; -3', '2; -2', '3; -1'];
  animationValues;

  ngOnInit() {
    this.animationValues = this.rtl ? this.rtlAnimation : this.defautlAnimation;
  }

  get fillStyle() {
    return {
      fill: `url(${this.urlBase}#${this.idGradient})`
    };
  }

  get clipStyle() {
    return `url(${this.urlBase}#${this.idClip})`;
  }
  
  get urlBase() {
    const {origin, pathname} = window.location;
    return `${origin}${pathname}`;
  }
}
