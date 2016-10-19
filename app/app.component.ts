import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App,title:{{title}},name:{{hero}}</h1>'
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero = 'Windstorm';
}

