export interface IMedia {
  id: string;
  name: string;
  description: string;
  category: string;
  language: string;
  country: string;
}

export interface IAllSources {
  staus: string;
  sources: IMedia[];
}

export interface IArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  content: string;
  publishedAt: string;
}

export interface INewsResponse extends IAllSources {
  status: string | number;
  totalResults: number;
  articles: IArticle[];
}

export type Options = {
  [apiKey: string]: string;
};

export interface ILoader {
  baseLink: string;
  options: Options;
  errorHandler: (res: Response) => Response | void;
  getResp: ({ endpoint, options = {} }: { endpoint: string; options?: Options }, callback: () => void) => void;
  makeUrl: (options: Options, endpoint: string) => void;
  load: (method: string, endpoint: string, callback: (data: INewsResponse) => void, options?: Options) => void;
}

export interface IAppController extends ILoader {
  next: boolean;
  getSources: (callback: (data?: INewsResponse | undefined) => INewsResponse | void) => void;
  errorHandler: (res: Response) => Response | void;
  getNews: (e: Event, callback: (data?: INewsResponse | undefined) => INewsResponse | void) => void;
}

export interface INews {
  news?: IArticle[];
  newsClone?: HTMLDivElement;
  count: number;
  draw: (data: IArticle[]) => void;
}
export interface ISources {
  fragment?: DocumentFragment;

  sourceItemTemp?: HTMLTemplateElement | null;

  draw: (data: IMedia[]) => void;
}
export interface IAppView {
  news: INews;
  sources: ISources;
  drawNews: (data?: INewsResponse) => void;
  drawSources: (data?: INewsResponse) => void;
}

export interface IApp {
  start: () => void;
  controller: IAppController;
  view: IAppView;
}
