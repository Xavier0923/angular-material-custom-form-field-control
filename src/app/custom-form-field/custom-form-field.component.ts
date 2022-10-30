import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { PublishTime } from '../publishtime';

@Component({
  selector: 'app-custom-form-field',
  templateUrl: './custom-form-field.component.html',
  styleUrls: ['./custom-form-field.component.css'],
})
export class CustomFormFieldComponent implements OnInit {
  publishTime: PublishTime;
  constructor() {}

  ngOnInit() {
    this.getServerData();
  }

  getServerData() {
    this.publishTime = {
      publishHour: moment(new Date('2017-01-26 09:10')).format('HH'),
      publishMinute: moment(new Date('2017-01-26 09:10')).format('mm'),
    };
  }
}
