import { Parent } from './Parent';

export class Children {
  id: string;
  color: string;

  constructor() {
    this.id = Parent.getID();
    this.color = Parent.getHEXColor();
  }
}
