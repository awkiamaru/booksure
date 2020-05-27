import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ListComponent } from './list/list.component';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  form: FormGroup;
  searchValue: string;

  constructor() {
    this.form = new FormGroup({
      search: new FormControl(),
    });
  }

  ngOnInit(): void {}

  submitForm() {
    this.searchValue = this.form.value.search;
  }
}
