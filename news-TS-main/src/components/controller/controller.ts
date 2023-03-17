import { INewsResponse } from '../types';
import AppLoader from './appLoader';

class AppController extends AppLoader {
  public next = false;
  public preCt?: HTMLElement;
  getSources(callback: (data?: INewsResponse) => INewsResponse | void) {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  getNews(e: Event, callback: (data?: INewsResponse | undefined) => INewsResponse | void) {
    let target = e.target as HTMLDivElement;
    if (e.currentTarget !== null) this.preCt = e.currentTarget as HTMLElement;
    const newsContainer = (e.currentTarget as HTMLElement) || this.preCt;
    while (target !== newsContainer) {
      if (target?.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id') as string;
        if (newsContainer.getAttribute('data-source') !== sourceId || this.next === true) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = target.parentNode as HTMLDivElement;
    }
  }
}

export default AppController;
