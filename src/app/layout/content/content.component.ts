import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  form: FormGroup;
  constructor(public fb: FormBuilder) {
    this.form = new FormGroup({
      search: new FormControl(),
    });
  }

  ngOnInit(): void {}

  submitForm() {
    console.log(this.form.value);
  }
}
