import { INewsResponse } from '../types/index';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
  public news;

  public sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data?: INewsResponse) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data?: INewsResponse) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
