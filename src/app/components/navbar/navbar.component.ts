import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  menuItems = [
    { label: 'Profile' },
    { label: 'Support' },
    { label: 'Idea Box' },
    { label: 'Logout' },
    // Add more menu items as needed
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
