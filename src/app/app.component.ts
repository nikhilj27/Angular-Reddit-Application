import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  articles: Article[];

  constructor(){
    this.articles = [
      new Article('Angular 7', 'https://www.angular.io', 5),
      new Article('Facebook', 'https://www.facebook.com', 8),
      new Article('Google', 'https://www.google.com', 10)
    ];
  }

  addArticle(title: HTMLInputElement, link:HTMLInputElement) {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value ='';
    link.value='';
    return false;
  }


  sortedArticles(): Article[]{
    return this.articles.sort((a:Article, b:Article) => b.votes - a.votes);
  }

}
