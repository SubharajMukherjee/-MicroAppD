import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elements1';

  Button1() {
    localStorage.setItem('demo', 'button1');
    location.reload();
  }

  Button2() {
    localStorage.setItem('demo', 'button2');
    location.reload();
  }
}
