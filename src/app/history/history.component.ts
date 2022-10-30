import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  HostListener,
} from '@angular/core';
import { DxActionSheetComponent } from 'devextreme-angular';
import { History } from '../calculator/calculator.service';

@Component({
  selector: 'history-component',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {
  @ViewChild('actionSheet', { static: false }) history!: DxActionSheetComponent;

  @Input() dataSource: History[];

  @Output() updateInputField = new EventEmitter<any>();

  show() {
    this.history.instance.show();
  }
  onItemClick(value) {
    const historyRes = value.itemData.text.split(' = ')[1];
    historyRes && this.updateInputField.emit(historyRes);
  }
}
