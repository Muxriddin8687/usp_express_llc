import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-reviews-carousel',
  templateUrl: './reviews-carousel.component.html',
  styleUrls: ['./reviews-carousel.component.scss']
})
export class ReviewsCarouselComponent implements OnInit {
  data: any[] = [
    'This company is Awesome! I was nervous because this was the first time I needed something like this done. My car needed to be transported from NJ to IL I’m a type of person I look at reviews!',
    'Usp Express LLC is legit and you will not be disappointed. They shipped my car from Boston to Dallas, the communication was great ,Got my car 4 days earlier than expected with no issues.',
    'Never having shipped a vehicle I was very leery. After scouring reviews I found Usp Express LLC. I asked tons of questions and they happily and plainly answered each one.'
  ];

  constructor() {

  }

  ngOnInit(): void {
  }

  // carousel configurations
  config: SwiperOptions = {
    slidesPerView: 'auto',
    loop: true,
    pagination: false,
    centeredSlides: false,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next-reviews',
      prevEl: '.swiper-button-prev-reviews'
    },
    spaceBetween: 20,
    breakpoints: {
      990: {
        slidesPerView: 3,
      },
      660: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 1,
      },
      350: {
        slidesPerView: 1,
      }
    }
  };

}
