import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  environment = environment;

  constructor(public apiService: ApiService)
  {}

  ngOnInit(): void {
  }

}
