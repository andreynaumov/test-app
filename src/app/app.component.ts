import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { fromWorker } from 'observable-webworker';
import { plainToClass } from 'class-transformer';
import { Parent } from './classes/Parent';
import { Options } from './classes/Options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public formChange$: BehaviorSubject<Options> = new BehaviorSubject<Options>(null);
  public mockDataList$!: Observable<Parent[]>;

  ngOnInit(): void {
    this.runWorker();
  }

  private runWorker(): void {
    this.mockDataList$ = fromWorker<Options, string>(
      () => new Worker(new URL('./app.worker', import.meta.url), { type: 'module' }),
      this.formChange$
    ).pipe(map((message) => this.parseDataList(message)));
  }

  private parseDataList(vl: string): Parent[] {
    return JSON.parse(vl).map((item: Parent) => plainToClass(Parent, item));
  }
}
