import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/services/api.service';


@Component({
  selector: 'app-studcorner',
  templateUrl: './studcorner.component.html',
  styleUrls: ['./studcorner.component.scss']
})
export class StudcornerComponent implements OnInit {

  schoolData: any;
  environment = environment;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getSchoolData();
  }

  getSchoolData()
  {
    this.apiService.getSchoolData('studCorner').subscribe((resp) => {
      this.schoolData = resp.schoolData.studCorner;
      console.log(this.schoolData);
    },
    (err) => {
      console.error(err);
    });
  }
}
