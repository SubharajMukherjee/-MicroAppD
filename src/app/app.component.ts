import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'elements1';
  versionData = JSON.parse(JSON.stringify({}));
  ngOnInit(): void {
    const verStr = localStorage.getItem('appVersion');
    this.versionData = JSON.parse(verStr);
    console.log('this is version data: '+ JSON.stringify(this.versionData));
    console.log('this is selection version: '+ this.versionData.app1);
    
  }

  App1() {
    localStorage.setItem('enableVersion', this.versionData.app1);
    location.reload();
  }

  App2() {
    localStorage.setItem('enableVersion', this.versionData.app2);
    location.reload();
  }
}

