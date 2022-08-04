import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-animation-water',
  templateUrl: './text-animation-water.component.html',
  styleUrls: ['./text-animation-water.component.scss']
})
export class TextAnimationWaterComponent implements OnInit {

  @Input() text: string = 'Text';

  constructor() { }

  ngOnInit(): void {
  }

}
