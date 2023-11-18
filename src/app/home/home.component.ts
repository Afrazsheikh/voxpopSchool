import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import SwiperCore, {SwiperOptions, EffectFade, Pagination, Grid, Navigation} from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { environment } from 'src/environments/environment';

SwiperCore.use([EffectFade, Pagination, Grid, Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  environment = environment;
  isLoading: boolean;
  schoolData: any;

  config: SwiperOptions = {
    slidesPerView: 1,
    navigation: false,
    effect: 'fade',
    fadeEffect: {crossFade: true},
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
  }

  config2: SwiperOptions = {
    direction: 'vertical',
    autoHeight: true,
    navigation: false,
    effect: 'fade',
    fadeEffect: {crossFade: true},
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      clickable: true
    },
  }

  config3: SwiperOptions = {
    slidesPerView: 3,
    navigation: false,
    spaceBetween: 16,
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2
      },
      996: {
        slidesPerView: 3
      }
    }
  }

  modalConfig: SwiperOptions = {
    navigation: true
  }

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  @ViewChild('swiper2', { static: false }) swiper2?: SwiperComponent;
  @ViewChild('swiper3', {static: false}) swiper3?: SwiperComponent;


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getSchoolData();
  }

  slideNext(){
    this.swiper?.swiperRef.slideNext(1000);
  }
  slidePrev(){
    this.swiper?.swiperRef.slidePrev(1000);
  }

  slideEduNext(){
    this.swiper2?.swiperRef.slideNext(1000);
  }
  slideEduPrev(){
    this.swiper2?.swiperRef.slidePrev(1000);
  }

  slideEventNext(){
    this.swiper3?.swiperRef.slideNext(1000);
  }

  slideEventPrev(){
    this.swiper3?.swiperRef.slidePrev(1000);
  }

  scrollToSection2() {
    document.getElementById("section-steps")?.scrollIntoView();
  }

  getSchoolData()
  {
    this.apiService.getSchoolData().subscribe((resp) => {
      this.schoolData = resp.schoolData;
      console.log(this.schoolData);
    },
    (err) => {
      console.error(err);
    });
  }
}
