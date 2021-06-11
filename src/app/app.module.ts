import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { BgColorDirective } from './directives/bg-color.directive';

@NgModule({
  declarations: [AppComponent, ControlPanelComponent, DataTableComponent, BgColorDirective],
  imports: [BrowserModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
