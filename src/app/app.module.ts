import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './core/app-routing.module';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainCarouselComponent } from './components/main-carousel/main-carousel.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormWithMapComponent } from './components/form-with-map/form-with-map.component';
import { ReviewsCarouselComponent } from './components/reviews-carousel/reviews-carousel.component';
import { TrusedCarouselComponent } from './components/trused-carousel/trused-carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { TransportComponent } from './pages/transport/transport.component';
import { HowitworksComponent } from './pages/howitworks/howitworks.component';
import { WhoweserveComponent } from './pages/whoweserve/whoweserve.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { FaqComponent } from './components/faq/faq.component';
import { MainVideoComponent } from './components/main-video/main-video.component';
import { IconSectionComponent } from './components/icon-section/icon-section.component';
import { OurCardComponent } from './components/our-card/our-card.component';
import { AboutComponent } from './components/about/about.component';
import { GetaquoteComponent } from './pages/getaquote/getaquote.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    NavbarComponent,
    MainCarouselComponent,
    CardsComponent,
    FormWithMapComponent,
    ReviewsCarouselComponent,
    TrusedCarouselComponent,
    FooterComponent,
    TransportComponent,
    HowitworksComponent,
    WhoweserveComponent,
    ContactsComponent,
    FaqComponent,
    MainVideoComponent,
    IconSectionComponent,
    OurCardComponent,
    AboutComponent,
    GetaquoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUsefulSwiperModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
