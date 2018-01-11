import { Component, OnInit } from '@angular/core';
import{} from '../n-day/n-day.component'

@Component({
  selector: 'app-n-week',
  templateUrl: './n-week.component.html',
  styleUrls: ['./n-week.component.css']
})
export class NWeekComponent implements OnInit {

  constructor() { }
  Days=['Saturday',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday'
]
  ngOnInit() {
  }

}
