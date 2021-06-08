import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form = new FormGroup({
    agree: new FormControl({ value: true, disabled: false }),
  });

  constructor() {
    this.form.valueChanges.subscribe(values => {
      console.log(values);
    });
  }
}
