import { Utils } from './Utils';

export class Children {
  id: string;
  color: string;

  constructor() {
    this.id = Utils.getID();
    this.color = Utils.getHEXColor();
  }
}
