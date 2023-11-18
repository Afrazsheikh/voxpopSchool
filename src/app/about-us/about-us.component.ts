import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ApiService } from 'src/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  animations: [
    trigger('slideIn', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate(1000)
      ])
    ])
  ]
})

export class AboutUsComponent implements OnInit {

  environment = environment;
  isLoading: boolean;
  schoolData: any;
  viewData: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getSchoolData();
  }

  getSchoolData()
  {
    this.apiService.getSchoolData('aboutUs').subscribe((resp) => {
      this.schoolData = resp.schoolData.aboutUs;
      console.log(this.schoolData);
    },
    (err) => {
      console.error(err);
    });
  }

  setViewData(title: string, desc: string, img: string) {
    this.viewData = {
      title,
      desc,
      img
    }
  }

}
