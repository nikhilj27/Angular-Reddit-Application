import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-reddit app';

  addArticle(title: HTMLInputElement, link:HTMLInputElement) {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }

}
