import { IArticle } from '../../types/index';
import './news.css';

class News {
  public news?: IArticle[];

  public newsClone?: HTMLDivElement;

  public count = 0;

  draw(data: IArticle[]) {
    this.news = data.length >= 10 ? data.filter((_item, idx) => idx < 10 + this.count) : data;
    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

    this.news.forEach((item, idx) => {
      this.newsClone = newsItemTemp.content.cloneNode(true) as HTMLDivElement;
      if (idx % 2) {
        this.newsClone.querySelector('.news__item')?.classList.add('alt');
      }
      const clonPhoto = this.newsClone.querySelector('.news__meta-photo') as HTMLDivElement;
      clonPhoto.style.backgroundImage = `url(${
        item.urlToImage ||
        'https://o-prirode.ru/wp-content/uploads/2018/05/opisanie-trekhpalogo-lenivtsa-e1526833489223.jpg'
      })`;
      const clonAuthor = this.newsClone.querySelector('.news__meta-author') as HTMLTemplateElement;
      clonAuthor.textContent = item.author || item.source.name;
      const clonMeta = this.newsClone.querySelector('.news__meta-date') as HTMLTemplateElement;
      clonMeta.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
      this.newsClone.querySelectorAll('.news__description-title')[0].textContent = item.title;
      this.newsClone.querySelectorAll('.news__description-source')[0].textContent = item.source.name;
      this.newsClone.querySelectorAll('.news__description-content')[0].textContent = item.description;
      this.newsClone.querySelector('.news__read-more a')?.setAttribute('href', item.url);

      fragment.append(this.newsClone);
    });
    const containet = document.querySelector('.news') as HTMLTemplateElement;
    containet.innerHTML = '';
    containet.appendChild(fragment);
  }
}

export default News;
