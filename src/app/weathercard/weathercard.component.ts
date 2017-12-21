import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weathercard',
  templateUrl: './weathercard.component.html',
  styleUrls: ['./weathercard.component.css']
})
export class WeathercardComponent implements OnInit {

  @Input() weatherData;


  constructor() { }

  ngOnInit() {
  }

}
