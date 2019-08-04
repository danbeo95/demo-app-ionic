import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pooja',
  templateUrl: './pooja.page.html',
  styleUrls: ['./pooja.page.scss'],
})
export class PoojaPage implements OnInit {
  slides:Array<string>;
  constructor() { }

  ngOnInit() {
    this.initSlides();
  }
  initSlides(){
    this.slides = [
      'assets/imgs/slide_1.jpg',
      'assets/imgs/slide_2.jpeg'
    ]
  }
  
}
