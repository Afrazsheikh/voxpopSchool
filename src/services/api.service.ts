import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headerLogo: string;
  address: any;
  email: string;
  phone: string;

  constructor(private http: HttpClient) { }

  getSchoolData(param:string | null = null): Observable<any> {
    if(param) {
      return this.http.get(environment.apiBaseUrl + 'userService/getSchoolData/' + environment.schoolId + '?param=' + param);
    }
    else {
      return this.http.get(environment.apiBaseUrl + 'userService/getSchoolData/' + environment.schoolId);
    }
  }

  getAlbums(): Observable<any> {
    return this.http.get(environment.apiBaseUrl + 'userService/getAlbums');
  }

  getImagesByAlbum(name: string): Observable<any> {
    return this.http.get(environment.apiBaseUrl + 'userService/getGalleryByAlbum/' + name);
  }

  getNewsById(id: string): Observable<any> {
    return this.http.get(environment.apiBaseUrl + 'userService/getNewsById/' + environment.schoolId + '?id=' + id);
  }

//forms
addEnquiry(postData: any): Observable<any> {
  return this.http.post(environment.apiBaseUrl + 'userService/addEnquiry', postData);
}

addfeedback(postData: any): Observable<any> {
  return this.http.post(environment.apiBaseUrl + 'userService/addfeedback', postData);
}

}
