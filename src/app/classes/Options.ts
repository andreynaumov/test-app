import { FormValue } from '../interfaces/form.value';

export class Options {
  readonly delay: number;
  readonly numberOfElements: number;
  readonly listOfId: string[];

  constructor(value: FormValue) {
    this.delay = Number(value.delay) || 1000;
    this.numberOfElements = Number(value.numberOfElements) || 100;
    this.listOfId = Options.getListIdFromString(value.listOfId);
  }

  private static getListIdFromString(stringOfId: string): string[] {
    return stringOfId.split(',').filter((el) => !!el.length);
  }
}
