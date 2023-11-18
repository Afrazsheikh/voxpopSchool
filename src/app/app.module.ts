import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { SwiperModule } from 'swiper/angular';
import { AdmissionComponent } from './admission/admission.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { EquiryComponent } from './equiry/equiry.component';
import { CareersComponent } from './careers/careers.component';
import { StudcornerComponent } from './studcorner/studcorner.component';
import { FacilityComponent } from './facility/facility.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PublicDisclouserComponent } from './public-disclouser/public-disclouser.component';
import { GalleryImagesComponent } from './gallery-images/gallery-images.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  
    
    AdmissionComponent,
    NewsComponent,
    GalleryComponent,
    ContactComponent,
    EquiryComponent,
    CareersComponent,
    StudcornerComponent,
    FacilityComponent,
    AboutUsComponent,
    PublicDisclouserComponent,
    GalleryImagesComponent,
    NewsDetailComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
