import {
  Component,
  EventEmitter,
  OnInit,
  ViewChild,
  Output,
  HostListener,
} from '@angular/core';
import { DxTextBoxComponent } from 'devextreme-angular';

@Component({
  selector: 'text-box-component',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css'],
})
export class TextBoxComponent implements OnInit {
  @ViewChild('textBox', { static: false }) textBox!: DxTextBoxComponent;
  @Output() computeResult = new EventEmitter<string>();
  @Output() showHistory = new EventEmitter();
  @Output() setValue = new EventEmitter<string>();

  options: any;

  constructor() {
    this.options = {
      text: '﹀',
      stylingMode: 'text',
      onClick: () => {
        this.showHistory.emit();
      },
    };
  }
  ngOnInit(): void {}

  onEnterKey(e: any) {
    this.computeResult.emit(e.component.option('value'));
  }
  onValueChanged(e: any) {
    if (e.value[e.value.length - 1] == '=') {
      this.computeResult.emit(e.previousValue);
    } else {
      this.setValue.emit(e.value);
    }
    const inputEl = e.element.getElementsByClassName('dx-texteditor-input')[0];
    inputEl.scrollLeft = inputEl.scrollWidth;
  }
  updateValue(val) {
    this.textBox.instance.option('value', val);
  }

  @HostListener('keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    const allowedChars = [
      ...['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      ...['*', '/', '+', '-', '=', '(', ')', '.'],
    ];
    if (allowedChars.includes(event.key) || event.which <= 40) {
      return;
    }
    event.preventDefault();
  }
}
