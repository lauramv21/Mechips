import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './empty-template.component.html',
  styleUrls: ['./empty-template.component.scss']
})
export class EmptyTemplateComponent {
  hideLogo = false;

  constructor(private router: Router) {
  }

  getYPosition(e: Event) {
    this.hideLogo = (e.target as any).scrollTop > 50;
  }

}
