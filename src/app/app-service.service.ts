import { AppSettings } from './app.constants';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  url = AppSettings.versionInfoURL;
  constructor(private http: HttpClient) { }

  getVersionInfo(): Observable<any> {
    return this.http.get(this.url);
  }
}
