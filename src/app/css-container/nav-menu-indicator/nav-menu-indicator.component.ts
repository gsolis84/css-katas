import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Listen } from 'ionicons/dist/types/stencil-public-runtime';

@Component({
  selector: 'app-nav-menu-indicator',
  templateUrl: './nav-menu-indicator.component.html',
  styleUrls: ['./nav-menu-indicator.component.scss']
})
export class NavMenuIndicatorComponent implements OnInit, AfterViewInit {
  list: any[] | NodeListOf<Element> = []; 
  constructor() { }

  ngAfterViewInit(): void {
    this.list = document.querySelectorAll('.list');
  }

  ngOnInit(): void {
  }

  activeLink(element: any): void {
    element.preventDefault();
    this.list.forEach(item => {
      item.classList.remove('active');
    });

    element.currentTarget.classList.add('active')
  }
}

