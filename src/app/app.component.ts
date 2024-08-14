import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  act: {Title:string; Description: string; Submit: boolean}[] = [];

  addList(Title:string, Description: string, Submit: boolean){
this.act.push({Title, Description, Submit})
  }
  constructor() {}
}
