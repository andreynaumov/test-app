export class Utils {
  static getID(): string {
    return Math.floor(Math.random() * (999 - 100 + 1) + 100).toString();
  }

  static getInt(): number {
    return Math.floor(100000 + Math.random() * 900000);
  }

  static getFloat(): number {
    return Math.random();
  }

  static getHEXColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
