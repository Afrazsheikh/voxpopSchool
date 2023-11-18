import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.scss']
})
export class FacilityComponent implements OnInit {
  environment = environment;
  isLoading: boolean;
  schoolData: any;
  viewData: any;
  images: any;
  images2: any;
  images3: any;
  images4: any;
  images5: any;
  images6: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getSchoolData()
  }

  getSchoolData()
  {
    this.apiService.getSchoolData().subscribe((resp) => {
      console.log(resp);
      
      this.schoolData = resp.schoolData.facility;
      this.images =  resp.schoolData.facility.imgF1    
      this.images2 =  resp.schoolData.facility.imgF2   
      this.images3 =  resp.schoolData.facility.imgzF3  
      this.images4 =  resp.schoolData.facility.imgF4
      this.images5 =  resp.schoolData.facility.imgF5
      this.images6 =  resp.schoolData.facility.imgF6




      console.log("facility",this.schoolData, this.images2);
    },
    (err) => {
      console.error(err);
    });
  }


}
