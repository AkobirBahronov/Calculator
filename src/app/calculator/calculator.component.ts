import { Component, ViewChild } from '@angular/core';
import { HistoryComponent } from '../history/history.component';
import { TextBoxComponent } from '../text-box/text-box.component';
import { ToastComponent } from '../toast/toast.component';
import { Service, History } from './calculator.service';

@Component({
  selector: 'calculator-component',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [HistoryComponent, ToastComponent, TextBoxComponent, Service],
})
export class CalculatorComponent {
  @ViewChild(HistoryComponent) historyComp!: HistoryComponent;
  @ViewChild(TextBoxComponent) textBoxComp!: TextBoxComponent;
  @ViewChild(ToastComponent) toastComp!: ToastComponent;

  actionList: string[][];
  history: History[];
  value: string = '';

  constructor(service: Service) {
    this.actionList = service.getActions();
    this.history = service.getHistory();
  }
  showHistory() {
    this.historyComp.show();
  }

  computeResult(expr: any) {
    const writeResult = (res: any) => {
      this.history.unshift({ text: `${expr} = ${res}` });
      this.history.length > 8 && this.history.pop();
      this.updateInputValue(res);
    };
    const warn = () => {
      this.toastComp.show();
    };
    this.calculate(expr, writeResult, warn);
  }

  updateInputValue(val) {
    this.textBoxComp.updateValue(val);
  }

  updateInputValueFromHistory(res: any) {
    const val = isNaN(+this.value) ? this.value + res : res;
    this.updateInputValue(val);
  }

  setValue(v) {
    this.value = v;
  }

  calculate(expr, write, warn) {
    try {
      const res = '' + this.roundNumber(new Function(`return (${expr})`)(), 6);
      write(res);
    } catch (err) {
      warn();
    }
  }

  roundNumber(num: number, dec: number) {
    return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
  }
}
