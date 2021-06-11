import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FormValue } from './interfaces/form.value';
import { Parent } from './classes/Parent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public formChange$: Subject<FormValue> = new Subject<FormValue>();
  public mockDataList$!: Observable<Parent[]>;

  ngOnInit(): void {}
}
