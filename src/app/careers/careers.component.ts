import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/services/api.service';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss','../equiry/equiry.component.scss']
})
export class CareersComponent implements OnInit {
  FormData: FormGroup;
  isLoading: boolean;
  data: any;

  schoolData: any;
  environment = environment;

  constructor(private apiService: ApiService, private toast: ToastrService) { }

  ngOnInit(): void {

    this.FormData = new FormGroup ({
      name : new FormControl(null,[Validators.required] ),
      email : new FormControl(null ,[Validators.required] ),
      phoneNumber : new FormControl(null ,[Validators.required] ),
      message : new FormControl(null ,[Validators.required] )

    })
    this.getSchoolData();
      }

  getSchoolData()
  {
    this.apiService.getSchoolData('careers').subscribe((resp) => {
      this.schoolData = resp.schoolData.careers;
      console.log(this.schoolData);
    },
    (err) => {
      console.error(err);
    });
  }

  

  submit()
  {
    console.log("testing", this.FormData.value);
    
    this.isLoading = true;
    this.apiService.addfeedback(this.FormData.value).subscribe((resp) => {
      console.log("for data", resp);
      
      this.isLoading = false;
      document.getElementById('addEnquiry')?.click();
   
    },
    (err) => {
      this.isLoading = false;
      this.toast.error('', err.error.message);
      console.error(err);
    })
  }
  pathForm(){
    this.FormData.patchValue({
      name: this.data.userName,
      email: this.data.email,

      phoneNumber: this.data.phoneNumber,
      message: this.data.message,

      


    })
  }
  
  clearEnquiryData()
  {
    this.FormData.patchValue({
      name: null,
      email: null,
      phoneNumber: null,
      message: null,

    })
  }




}


  


