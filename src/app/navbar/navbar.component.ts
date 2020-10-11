import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  collapseNavbar():void {
    let menuToggler = document.getElementById('menuToggler') as HTMLInputElement;
    menuToggler.checked = false;
  }

}
