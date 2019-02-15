import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() { }

  ngOnInit() {
  }

  voteUp(){
    this.article.voteUp();
    return false;
  }

  voteDown(){
    this.article.voteDown();
    return false;
  }



}
