import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  minDate = new Date('2023-01-01');
  maxDate = new Date();

  dateValue = new Date('2022-02-01');
  form: FormGroup = new FormGroup({
    date: new FormControl(this.dateValue)
  });
}
