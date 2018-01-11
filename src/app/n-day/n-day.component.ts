import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-n-day',
  templateUrl: './n-day.component.html',
  styleUrls: ['./n-day.component.css']
})
export class NDayComponent implements OnInit {
  @Input() DispDay:string;
  constructor() { }
  ngOnInit() {
  }

}
