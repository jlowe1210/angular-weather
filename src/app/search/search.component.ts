import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
// import { Form } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  @ViewChild('f') form: any;
  @Output() searchLocation = new EventEmitter<string>();

  constructor() { }

  onSubmit(e) {
    if (e.value.searchLocation.trim() === '') {
      this.form.reset();
      return;
    }
    this.searchLocation.emit(e.value.searchLocation);
    this.form.reset();
  }

}
