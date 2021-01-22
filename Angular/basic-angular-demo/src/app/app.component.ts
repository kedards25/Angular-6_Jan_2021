import { Component } from '@angular/core';

/*decorator*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:`<h2>Greetings {{usrNm}}</h2>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-angular-demo';

  usrNm='Kedar';
}
