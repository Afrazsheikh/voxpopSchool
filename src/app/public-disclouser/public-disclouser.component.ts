import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-public-disclouser',
  templateUrl: './public-disclouser.component.html',
  styleUrls: ['./public-disclouser.component.scss']
})
export class PublicDisclouserComponent implements OnInit {

  schoolData: any;
  environment = environment;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getSchoolData();
  }

  getSchoolData()
  {
    this.apiService.getSchoolData('documents').subscribe((resp) => {
      this.schoolData = resp.schoolData.documents;
      console.log(this.schoolData);
    },
    (err) => {
      console.error(err);
    });
  }

}
