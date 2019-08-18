import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

function uid() {
  return Math.random()
    .toString(36)
    .substring(2);
}

@Component({
  selector: 'content-loader',
  templateUrl: './content-loader.component.html'
})
export class ContentLoaderComponent implements OnInit, OnChanges {
  @Input() animate = true;

  @Input() baseUrl = '';

  @Input() width = 400;

  @Input() height = 130;

  @Input() speed = 2;

  @Input() preserveAspectRatio = 'xMidYMid meet';

  @Input() primaryColor = '#f9f9f9';

  @Input() secondaryColor = '#ecebeb';

  @Input() primaryOpacity = 1;

  @Input() secondaryOpacity = 1;

  @Input() uniqueKey;

  @Input() rtl;

  @Input() style;

  idClip = uid();
  idGradient = uid(); 

  defautlAnimation = ['-3; 1', '-2; 2', '-1; 3'];
  rtlAnimation = ['1; -3', '2; -2', '3; -1'];
  animationValues;

  fillStyle: { fill: string };
  clipStyle: string;

  ngOnInit() {
    this.animationValues = this.rtl ? this.rtlAnimation : this.defautlAnimation;
    this.setFillStyle();
    this.setClipStyle();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['baseUrl']) {
      if (changes['baseUrl'].previousValue !== changes['baseUrl'].currentValue) {
        this.setFillStyle();
        this.setClipStyle();
      }
    }

  }

  setFillStyle() {
    this.fillStyle = {
      fill: `url(${this.baseUrl}#${this.idGradient})`
    };
  }

  setClipStyle() {
    this.clipStyle = `url(${this.baseUrl}#${this.idClip})`;
  }
}
