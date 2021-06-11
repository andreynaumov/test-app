import { Component, Input } from '@angular/core';
import { Parent } from '../../classes/Parent';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent {
  @Input() mockDataList: Parent[] = [];

  public itemId = (index: number, item: Parent) => item.id;
}
