import {Component} from '@angular/core';

@Component({
  selector: 'app-homepage-parent',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  hideLogo = false;

  constructor() {
  }

  getYPosition(e: Event) {
    this.hideLogo = (e.target as any).scrollTop > 50;
  }

}
