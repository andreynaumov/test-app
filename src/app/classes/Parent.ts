import { Children } from './Children';
import { Utils } from './Utils';

export class Parent {
  id: string;
  int: number;
  float: number;
  color: string;
  child: Children;

  constructor() {
    this.id = Utils.getID();
    this.int = Utils.getInt();
    this.float = Utils.getFloat();
    this.color = Utils.getHEXColor();
    this.child = new Children();
  }

  public setId(id: string): void {
    this.id = id;
  }
}
