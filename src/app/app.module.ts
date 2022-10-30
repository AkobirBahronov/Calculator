import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ButtonComponent } from './button/button.component';
import { HistoryComponent } from './history/history.component';
import { ToastComponent } from './toast/toast.component';
import { TextBoxComponent } from './text-box/text-box.component';
import {
  DxActionSheetModule,
  DxButtonModule,
  DxTextBoxModule,
  DxToastModule,
} from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ButtonComponent,
    HistoryComponent,
    ToastComponent,
    TextBoxComponent,
  ],
  imports: [
    BrowserModule,
    DxTextBoxModule,
    DxToastModule,
    DxActionSheetModule,
    DxButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
