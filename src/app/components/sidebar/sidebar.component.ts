import { Component, EventEmitter, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface Menu {
  title: string;
  src: string;
  gap?: boolean;
  routerlink?: string;
  src1?: string;
  action?: () => any;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  showAdditionalSection = false; // Variable to control the visibility of the additional section

  open =true;
  menus: Menu[] = [
    {
      title: 'Snagging',
      src: '',
      routerlink: '',
      src1: '',
    },

  ];

  constructor(

    private router: Router
  ) {}

  ngOnInit(): void {}



  logout() {
  }
  additionalItems = [
    { title: 'Additional Item 1' },
    { title: 'Additional Item 2' },
    { title: 'Additional Item 3' }
  ];

  // Function to toggle the visibility of the additional section
  toggleAdditionalSection() {
    this.showAdditionalSection = !this.showAdditionalSection;

}
}
