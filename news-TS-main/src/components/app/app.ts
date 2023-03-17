import AppController from '../controller/controller';
import { IAppController, IAppView, INewsResponse } from '../types';
import { AppView } from '../view/appView';

class App {
  public controller: IAppController;

  public view: IAppView;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    document.querySelector('.sources')?.addEventListener('click', (event) => {
      this.controller.getNews(event, (data?: INewsResponse) => this.view.drawNews(data));

      const buttonNext = document.querySelector('.button__next') as HTMLDivElement;
      this.view.news.count = 0;
      this.controller.next = false;
      setTimeout(() => {
        buttonNext.style.display = 'block';
        document.querySelector('.button__next')?.addEventListener('click', () => {
          this.view.news.count += 10;
          this.controller.next = true;
          this.controller.getNews(event, (data?: INewsResponse) => this.view.drawNews(data));
        });
      }, 1000);
    });
    this.controller.getSources((data) => this.view.drawSources(data));
  }
}

export default App;
