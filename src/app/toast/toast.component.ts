import { Component, ViewChild } from '@angular/core';
import { DxToastComponent } from 'devextreme-angular';

@Component({
  selector: 'toast-component',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent {
  @ViewChild('toast', { static: false }) toast!: DxToastComponent;
  displayTime: number;
  message: string;
  type: string;

  constructor() {
    this.displayTime = 500;
    this.message = 'Expression is Invalid';
    this.type = 'error';
  }

  show() {
    this.toast.instance.show();
  }
}
