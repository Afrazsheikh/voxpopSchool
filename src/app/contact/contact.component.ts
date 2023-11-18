import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ApiService } from 'src/services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  FormData: FormGroup;
  isLoading: boolean;
  data: any;

  constructor(public apiService: ApiService,private fb: FormBuilder,private toast: ToastrService) { }

  ngOnInit(): void {
    this.FormData = new FormGroup ({
      name : new FormControl(null,[Validators.required] ),
      email : new FormControl(null ,[Validators.required] ),
      phoneNumber : new FormControl(null ,[Validators.required] ),
      message : new FormControl(null ,[Validators.required] )



    })
  }
  redirectToMaps(): void {
    const location = "Aparna+County+Access+Road,+Matrusri+Nagar,+Miyapur,+Hyderabad,+Telangana+500049/@22.2837118,80.0363891,4z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x3bcb92166aaaaaab:0x7e5a77c944ca518b!3e0";
    const mapsURL = `https://www.google.com/maps/dir//${location}`;
    
    // Open the link in a new tab/window
    window.open(mapsURL, '_blank');
  }

  submit()
  {
    console.log("testing", this.FormData.value);
    
    this.isLoading = true;
    this.apiService.addEnquiry(this.FormData.value).subscribe((resp) => {
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
      name: this.data.name,
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
