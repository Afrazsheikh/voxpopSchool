import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  environment = environment;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
  }

}
