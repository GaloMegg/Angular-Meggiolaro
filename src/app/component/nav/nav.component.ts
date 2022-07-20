import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  links = {
    personal: "https://galomegg.github.io/portfolio/",
    twitter: "https://twitter.com/Wtscrackin",
    github: "https://github.com/GaloMegg",
  }
  constructor() {
  }

  ngOnInit(): void {
  }

}
