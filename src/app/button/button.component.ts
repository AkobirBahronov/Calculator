import {
  Component,
  EventEmitter,
  Input,
  Output,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'button-component',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() val: any;
  @Input() inputValue: string;
  @Output() setInputValue = new EventEmitter<string>();
  @Output() computeResult = new EventEmitter<string>();

  @HostListener('click')
  clickHandler() {
    if (this.val == '=') {
      this.computeResult.emit(this.inputValue);
      return;
    }
    let res;
    if (this.val == 'c') {
      res = '';
    } else if (this.val == '<-') {
      res = this.inputValue.slice(0, this.inputValue.length - 1);
    } else if (this.val == '()') {
      if (
        isNaN(+this.inputValue[this.inputValue.length - 1]) &&
        this.inputValue[this.inputValue.length - 1] != ')'
      ) {
        res = this.inputValue + '(';
      } else if (
        this.inputValue.split('(').length > this.inputValue.split(')').length
      ) {
        res = this.inputValue + ')';
      } else {
        res = this.inputValue;
      }
    } else {
      if (this.val == 'x') {
        this.val = '*';
      }
      if (
        isNaN(+this.inputValue[this.inputValue.length - 1]) &&
        isNaN(this.val) &&
        !'()'.includes(this.inputValue[this.inputValue.length - 1])
      ) {
        res = this.inputValue.slice(0, this.inputValue.length - 1) + this.val;
      } else {
        res = this.inputValue + this.val;
      }
    }
    this.setInputValue.emit(res);
  }
}
