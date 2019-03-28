import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mocard',
  templateUrl: './mocard.component.html',
  styleUrls: ['./mocard.component.scss']
})
export class MocardComponent implements OnInit {
  @Input() componentData;
  constructor() { }

  ngOnInit() {
  }

}
