import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { fromWorker } from 'observable-webworker';
import { plainToClass } from 'class-transformer';
import { FormValue } from './interfaces/form.value';
import { Parent } from './classes/Parent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public formChange$: BehaviorSubject<FormValue> = new BehaviorSubject<FormValue>(null);
  public mockDataList$!: Observable<Parent[]>;

  ngOnInit(): void {
    this.runWorker();
  }

  runWorker(): void {
    this.mockDataList$ = fromWorker<FormValue, string>(
      () => new Worker('./app.worker', { type: 'module' }),
      this.formChange$
    ).pipe(map((message) => JSON.parse(message).map((item: Parent) => plainToClass(Parent, item))));
  }
}
