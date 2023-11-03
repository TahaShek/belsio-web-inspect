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

  open =false;
  productImages: string[] = [
    '../assets/Logo1.png',
    '../assets/Logo2.png',
        // Add more product images as needed
  ];

  subProductMenu: any[] = [
    {
      title: 'Snagging',
      routerlink: '/snagging',
      src1: 'path-to-sub-product-image-1',
    },
    // Add more sub-product menu items as needed
  ];

  constructor(

    private router: Router
  ) {}

  ngOnInit(): void {}



  logout() {
  }
  additionalItems = [

  ];

  // Function to toggle the visibility of the additional section
  toggleAdditionalSection() {
    this.showAdditionalSection = !this.showAdditionalSection;

}
}
