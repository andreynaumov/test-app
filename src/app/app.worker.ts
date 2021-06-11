import { DoWork, runWorker } from 'observable-webworker';
import { interval, Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { FormValue } from './interfaces/form.value';
import { Parent } from './classes/Parent';

export class AppWorker implements DoWork<FormValue, string> {
  private amountItemList = 10;

  public work(input$: Observable<FormValue>): Observable<string> {
    return input$.pipe(
      switchMap((formValue) => {
        return this.getInterval(formValue);
      })
    );
  }

  private getInterval(vl: FormValue): Observable<string> {
    return interval(vl.delay).pipe(
      startWith(0),
      map(() => this.generateData(vl))
    );
  }

  private generateData(vl: FormValue): string {
    const mockData = Array(+vl.numberOfElements)
      .fill(null)
      .map(() => new Parent());

    const arrayIds = vl.arrayIds.split(',').filter((el) => !!el.length);
    let lastIndex = mockData.length - 1;

    arrayIds.forEach((newIndex) => {
      mockData[lastIndex].setId(newIndex);
      lastIndex--;
    });

    return JSON.stringify(mockData.slice(-this.amountItemList).reverse());
  }
}

runWorker(AppWorker);
