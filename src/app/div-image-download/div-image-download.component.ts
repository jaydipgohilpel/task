import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { Logger } from 'html2canvas/dist/types/core/logger';
import { ImageServiceService } from '../service/image-service.service'
// import * as html2canvas from 'html2canvas';
@Component({
  selector: 'app-div-image-download',
  templateUrl: './div-image-download.component.html',
  styleUrls: ['./div-image-download.component.scss']
})
export class DivImageDownloadComponent implements OnInit, AfterViewInit {
  @ViewChild('screen') screen!: ElementRef;
  @ViewChild('canvas') canvas!: ElementRef;
  @ViewChild('downloadLink') downloadLink!: ElementRef;
  @ViewChild('video') iframe!: ElementRef;

  constructor() {

  }


  ngOnInit(): void {
  }
  testImage: any;
  downloadImage() {

    html2canvas(this.screen.nativeElement).then(async canvas => {
      // debugger;
      this.canvas.nativeElement.src = await canvas.toDataURL();
      this.downloadLink.nativeElement.href = await canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = await 'marble-diagram.png';
      await this.downloadLink.nativeElement.click();
      this.testImage= await this.canvas.nativeElement.src;
      console.log(this.testImage);


    });

  }

  ngAfterViewInit(): void {
    // const doc = this.iframe.nativeElement.contentWindow;
    // console.log(doc.body);
    // const iframe = document.getElementsByTagName('iframe');
    // const screen = iframe[0]?.contentDocument?.body;

    // html2canvas(this.iframe.nativeElement).then(async canvas => {

    //   const base64image = canvas.toDataURL('image/png');
    // this.testImage = base64image;
    // Do something with the image
    // });
    // const nativeEl =  this.iframe.nativeElement;
    // if ( (nativeEl.contentDocument || nativeEl.contentWindow.document).readyState === 'complete' )        {
    //     nativeEl.onload = this.onIframeLoad.bind(this);
    //     this.testImage =   this.canvas.nativeElement.src;
    // } else {
    //   if (nativeEl.addEventListener) {
    //     nativeEl.addEventListener('load', this.onIframeLoad.bind(this), true);
    //     this.testImage =   this.canvas.nativeElement.src;
    //   } else if (nativeEl.attachEvent) {
    //     nativeEl.attachEvent('onload', this.onIframeLoad.bind(this));
    //     this.testImage =   this.canvas.nativeElement.src;
    //   }
    // }

  }
  imageLoad() {
    console.log("image loaded");
  }
  onIframeLoad() {
    // const base64String = this.iframe.nativeElement.contentWindow.document.body.innerHTML;
    // console.log(this.iframe.nativeElement.contentWindow.document.body.children[1].currentSrc);
    // this.testImage = this.iframe.nativeElement.contentWindow.document.body.children[1].currentSrc ;
  }


}
