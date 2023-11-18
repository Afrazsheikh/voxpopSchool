import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/services/api.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  albums: any[] = [];
  environment = environment;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums()
  {
    this.apiService.getAlbums().subscribe((resp) => {
      this.albums = resp.albums;
      console.log(this.albums);
    },
    (err) => {
      console.error(err);
    });
  }

}
