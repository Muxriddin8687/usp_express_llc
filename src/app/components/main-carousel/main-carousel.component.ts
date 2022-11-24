import { Component, AfterViewInit } from '@angular/core';

import { SwiperOptions, EffectFade, EffectCube, EffectCoverflow, EffectFlip } from 'swiper';
declare var anime: any;

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    var anDef = { opacityIn: <any>[], scaleIn: <any>[], scaleOut: 0, durationIn: 0, durationOut: 0, delay: 0 };
    anDef.opacityIn = [0, 1];
    anDef.scaleIn = [0.2, 1];
    anDef.scaleOut = 3;
    anDef.durationIn = 800;
    anDef.durationOut = 600;
    anDef.delay = 500;

    anime.timeline({ loop: true })
      .add({
        targets: '.anDef .letters-1',
        opacity: anDef.opacityIn,
        scale: anDef.scaleIn,
        duration: anDef.durationIn
      }).add({
        targets: '.anDef .letters-1',
        opacity: 0,
        scale: anDef.scaleOut,
        duration: anDef.durationOut,
        easing: "easeInExpo",
        delay: anDef.delay
      }).add({
        targets: '.anDef .letters-2',
        opacity: anDef.opacityIn,
        scale: anDef.scaleIn,
        duration: anDef.durationIn
      }).add({
        targets: '.anDef .letters-2',
        opacity: 0,
        scale: anDef.scaleOut,
        duration: anDef.durationOut,
        easing: "easeInExpo",
        delay: anDef.delay
      }).add({
        targets: '.anDef .letters-3',
        opacity: anDef.opacityIn,
        scale: anDef.scaleIn,
        duration: anDef.durationIn
      }).add({
        targets: '.anDef .letters-3',
        opacity: 0,
        scale: anDef.scaleOut,
        duration: anDef.durationOut,
        easing: "easeInExpo",
        delay: anDef.delay
      }).add({
        targets: '.anDef',
        opacity: 0,
        duration: 500,
        delay: 500
      });
  }


  // carousel configurations
  config: SwiperOptions = {
    effect: 'fade',
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 20
  };

}
