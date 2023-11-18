import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  newsId: any;
  newsData: any;
  environment = environment;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  )
  {
    route.paramMap.subscribe(param => {
      this.newsId = param.get('id');
      console.log(this.newsId);

      this.getNewsById()
    })
  }

  ngOnInit(): void {
  }

  getNewsById()
  {
    this.apiService.getNewsById(this.newsId).subscribe((resp) => {
      this.newsData = resp.data;
      console.log(this.newsData);
    },
    (err) => {
      console.error(err);
    });
  }

}
