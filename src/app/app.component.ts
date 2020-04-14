import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
   dateVal: Date = new Date();
   jsonVal: Object = {1: 'test', insideobject: {1: 'newtest'}};
}
