import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  expanded = false;

  @Input() smallHeader: boolean;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  toggle() {
    this.expanded = !this.expanded;
  }

  goToView(url: string) {
    this.router.navigateByUrl(url);
  }
}
