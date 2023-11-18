import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { faArrowDown, faArrowLeft, faArrowRight, faEye, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'school-website';

  constructor(library: FaIconLibrary, private apiService: ApiService)
  {
    library.addIcons(faEye, faArrowLeft, faArrowRight, faArrowDown, faPlay)
  }

  ngOnInit(): void {
    AOS.init();
    this.getSchoolData();
  }

  getSchoolData()
  {
    this.apiService.getSchoolData().subscribe((resp) => {
      this.apiService.headerLogo = resp.schoolData.logoImage;
      this.apiService.address = resp.schoolData.address;
      this.apiService.email = resp.schoolData.email;
      this.apiService.phone = resp.schoolData.phone;
    },
    (err) => {
      console.error(err);
    });
  }
}
