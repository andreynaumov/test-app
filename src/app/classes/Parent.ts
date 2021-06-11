import { Children } from './Children';

export class Parent {
  id: string;
  int: number;
  float: number;
  color: string;
  child: Children;

  public static getID(): string {
    return Math.floor(Math.random() * (999 - 100 + 1) + 100).toString();
  }

  private static getInt(): number {
    return Math.floor(100000 + Math.random() * 900000);
  }

  private static getFloat(): number {
    return Math.random();
  }

  public static getHEXColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  constructor() {
    this.id = Parent.getID();
    this.int = Parent.getInt();
    this.float = Parent.getFloat();
    this.color = Parent.getHEXColor();
    this.child = new Children();
  }

  public setId(id: string): void {
    this.id = id;
  }
}
