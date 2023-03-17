import { IMedia } from '../../types/index';
import './sources.css';

class Sources {
  public fragment: DocumentFragment = document.createDocumentFragment();

  public sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

  draw(data: IMedia[]): void {
    data.forEach((item) => {
      const sourceClone = this.sourceItemTemp?.content.cloneNode(true) as HTMLTemplateElement;

      sourceClone.querySelector('.source__item-name')!.textContent = item.name;
      sourceClone.querySelector('.source__item')?.setAttribute('data-source-id', item.id);

      this.fragment.append(sourceClone);
    });

    document.querySelector('.sources')?.append(this.fragment);
  }
}

export default Sources;
