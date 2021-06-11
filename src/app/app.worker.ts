import { DoWork, runWorker } from 'observable-webworker';
import { interval, Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { Parent } from './classes/Parent';
import { Options } from './classes/Options';

export class AppWorker implements DoWork<Options, string> {
  private amountItemList = 10;

  public work(input$: Observable<Options>): Observable<string> {
    return input$.pipe(switchMap((formValue) => this.getInterval(formValue)));
  }

  private getInterval(vl: Options): Observable<string> {
    return interval(vl.delay).pipe(
      startWith(0),
      map(() => this.generateMockJSON(vl))
    );
  }

  private generateMockJSON(vl: Options): string {
    const mockList = Array(vl.numberOfElements)
      .fill(null)
      .map(() => new Parent());

    let lastIndex = mockList.length - 1;

    vl.listOfId.forEach((newIndex) => {
      mockList[lastIndex].setId(newIndex);
      lastIndex--;
    });

    return JSON.stringify(mockList.slice(-this.amountItemList).reverse());
  }
}

runWorker(AppWorker);
