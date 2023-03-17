import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi-redirect-production.up.railway.app/', {
      apiKey: 'f0ca229d547e44b0b463ec1792376fba', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
