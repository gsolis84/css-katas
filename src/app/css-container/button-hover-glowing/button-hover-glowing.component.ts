import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-hover-glowing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-hover-glowing.component.html',
  styleUrls: ['./button-hover-glowing.component.scss']
})
export class ButtonHoverGlowingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
