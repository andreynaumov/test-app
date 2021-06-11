import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { merge, Observable, of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FormValue } from '../../interfaces/form.value';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css'],
})
export class ControlPanelComponent implements OnInit {
  @Output() formChange: EventEmitter<FormValue> = new EventEmitter<FormValue>();

  public form: FormGroup = this.fb.group({
    delay: [1000],
    numberOfElements: [100],
    arrayIds: ['196, 358, 433'],
  });

  private debounceTime = 800;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const firstPostMessage$: Observable<FormValue> = of(this.form.value);
    const valueChangeForm$: Observable<FormValue> = this.form.valueChanges.pipe(
      debounceTime(this.debounceTime)
    );

    merge(firstPostMessage$, valueChangeForm$).subscribe((formValue) =>
      this.formChange.emit(formValue)
    );
  }
}
