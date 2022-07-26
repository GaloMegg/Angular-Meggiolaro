import { Component, OnInit } from '@angular/core';
interface links {
  personal: string;
  twitter: string;
  github: string;
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  links: links = {
    personal: "https://galomegg.github.io/portfolio/",
    twitter: "https://twitter.com/Wtscrackin",
    github: "https://github.com/GaloMegg",
  }
  constructor() {
  }

  ngOnInit(): void {
  }

}
