import { Component } from '@angular/core';
import { AbstractModel } from './abstract-component/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-playground';
  models: AbstractModel[] = [
    {
      type: 'A',
      a: 'My type is A'
    },
    {
      type: 'B',
      b: "Don't trust me, I'm a B"
    }
  ]
}
