import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent implements OnInit {

  readMore: number = 0;
  schoolData: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getSchoolData();
  }

  getSchoolData()
  {
    this.apiService.getSchoolData('admission').subscribe((resp) => {
      this.schoolData = resp.schoolData.admission;
      document.getElementsByTagName('ul')[0].style.paddingLeft = '2rem';
      console.log(this.schoolData);
    },
    (err) => {
      console.error(err);
    });
  }
}

