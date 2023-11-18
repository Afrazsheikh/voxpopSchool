import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/services/api.service';
import SwiperCore, {Navigation, SwiperOptions} from 'swiper';
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-gallery-images',
  templateUrl: './gallery-images.component.html',
  styleUrls: ['./gallery-images.component.scss']
})
export class GalleryImagesComponent implements OnInit {

  config: SwiperOptions = {
    navigation: true
  }

  albumName: any;
  images: string[] = [];
  environment = environment;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  )
  {
    route.paramMap.subscribe(param => {
      this.albumName = param.get('id');
      console.log(this.albumName);

      this.getImagesByAlbum()
    })
  }

  ngOnInit(): void {
  }

  getImagesByAlbum()
  {
    this.apiService.getImagesByAlbum(this.albumName).subscribe((resp) => {
      this.images = resp.data.images;
      console.log(this.images);
    },
    (err) => {
      console.error(err);
    });
  }

}
