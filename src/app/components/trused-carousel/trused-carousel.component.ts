import { Component, OnInit } from '@angular/core';
import Swiper, { Navigation, SwiperOptions } from 'swiper';
Swiper.use([Navigation]);

@Component({
  selector: 'app-trused-carousel',
  templateUrl: './trused-carousel.component.html',
  styleUrls: ['./trused-carousel.component.scss']
})
export class TrusedCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  // carousel configurations
  trused: SwiperOptions = {
    loop: true, 
    pagination: false,
    centeredSlides: false,
    speed: 2000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next-trused',
      prevEl: '.swiper-button-prev-trused'
    },
    spaceBetween: 40,
    breakpoints: {
      1300: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      1200: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 2.5,
      },
      700: {
        slidesPerView: 2,
      },
      660: {
        slidesPerView: 1.7,
      },
      400: {
        slidesPerView: 1.3,
      }
    }
  };

}
