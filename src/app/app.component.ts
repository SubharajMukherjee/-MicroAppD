import { AppSettings } from './app.constants';
import { Component, OnInit, Input, SimpleChanges, OnChanges, ViewEncapsulation } from '@angular/core';
import { AppServiceService } from './app-service.service';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  title = 'router';
  versionData: string = null;
  Angular7baseUrl = AppSettings.Angular7baseUrl;
  Angular9baseUrl = AppSettings.Angular9baseUrl;
  Angular7 = AppSettings.Angular7;
  Angular9 = AppSettings.Angular9;
  @Input() routeName: any = {};
  constructor(private svc: AppServiceService) { }

  ngOnInit(): void {
    this.svc.getVersionInfo().subscribe(data =>{
      this.versionData = data;
    }, 
    () => console.error('Config file not found'));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`route change detected: ${JSON.stringify(this.routeName)}`);
    let routeElement: string = null;
    let angularAppVersion: string = null;
    let urlAfterRedirects: string = null;
    if (this.routeName !== undefined && this.routeName.routerEvent !== undefined) {
      routeElement = this.routeName.routerEvent.urlAfterRedirects.split('/');
      urlAfterRedirects = this.routeName.routerEvent.urlAfterRedirects;
    } else if (this.routeName !== undefined && this.routeName.urlAfterRedirects !==undefined){
      routeElement = this.routeName.urlAfterRedirects.split('/');
      urlAfterRedirects = this.routeName.urlAfterRedirects;
    }
    angularAppVersion = routeElement !== null && this.versionData !== null ? this.versionData[routeElement[1]] : null;
    console.log(`angularAppVersion: ${angularAppVersion}`);
    console.log(`routeElement: ${routeElement}`);
    console.log(`urlAfterRedirects: ${urlAfterRedirects}`);
    if(angularAppVersion === this.Angular7) {
      if (window.location.origin !== this.Angular7baseUrl) {
        location.replace(this.Angular7baseUrl + urlAfterRedirects);
      }
    } else if (angularAppVersion === this.Angular9) {
      if (window.location.origin !== this.Angular9baseUrl) {
        location.replace(this.Angular9baseUrl + urlAfterRedirects);
      }
    }
  }
}

