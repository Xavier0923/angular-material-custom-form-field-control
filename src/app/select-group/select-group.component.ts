import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { NgControl, AbstractControlDirective } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { PublishTime } from '../publishtime';

@Component({
  selector: 'app-select-group',
  templateUrl: './select-group.component.html',
  styleUrls: ['./select-group.component.css'],
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: SelectGroupComponent,
    },
  ],
})
export class SelectGroupComponent
  implements OnInit, MatFormFieldControl<PublishTime>
{
  hour_Option: string[] = [];
  minute_Option: string[] = [];
  static nextId = 0;

  _publishTime: PublishTime;

  @Input()
  set value(value: PublishTime) {
    console.log(value);
    this._publishTime = value;
    console.log(this._publishTime);
    // this.stateChanges.next();
  }
  get value() {
    return this._publishTime;
  }

  // @HostBinding() id = `example-tel-input-${SelectGroupComponent.nextId++}`;
  id: string;
  stateChanges = new Subject<void>();
  placeholder: string;
  ngControl: NgControl | AbstractControlDirective;
  // 焦點控制
  focused: boolean;
  //  empty 判斷是否為空
  empty: boolean;
  // label 是否開啟
  shouldLabelFloat: boolean = true;
  // 必填選項
  required: boolean = true;
  // 是否禁用
  disabled: boolean;
  // 控件是否處於錯誤
  errorState: boolean;
  // controlType?: string;
  autofilled?: boolean;
  userAriaDescribedBy?: string;
  setDescribedByIds(ids: string[]): void {
    // throw new Error('Method not implemented.');
  }
  onContainerClick(event: MouseEvent): void {
    console.log('asd');
    // throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.initTimeOption();
  }

  initTimeOption() {
    // hour
    for (let i = 0; i < 24; i++) {
      let str = String(i);
      if (str.length === 1) {
        str = '0' + str;
      }
      this.hour_Option.push(str);
    }
    // minute
    for (let i = 0; i < 60; i = i + 5) {
      let str = String(i);
      if (str.length === 1) {
        str = '0' + str;
      }
      this.minute_Option.push(str);
    }
  }

  ngOnDestroy(): void {
    console.log('destroy');
    this.stateChanges.unsubscribe();
  }
}
