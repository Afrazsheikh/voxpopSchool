import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  schoolData: any;
  environment = environment;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getSchoolData();
  }

  getSchoolData()
  {
    this.apiService.getSchoolData('section5').subscribe((resp) => {
      this.schoolData = resp.schoolData.section5;
      console.log(this.schoolData);
    },
    (err) => {
      console.error(err);
    });
  }

}
