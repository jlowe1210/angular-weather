import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weathertable',
  templateUrl: './weathertable.component.html',
  styleUrls: ['./weathertable.component.css']
})
export class WeathertableComponent implements OnInit {

  @Input() fiveDayForcast;

  constructor() { }

  ngOnInit() {
  }

}
