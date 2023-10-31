import { Component, OnInit,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AuthLayoutComponent implements OnInit {
  images: any[] = [
    {url: '../assets/loginImage.png'},
    {url: '../assets/loginImage.png'},

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
