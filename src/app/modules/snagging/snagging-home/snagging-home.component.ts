import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snagging-home',
  templateUrl: './snagging-home.component.html',
  styleUrls: ['./snagging-home.component.scss']
})
export class SnaggingHomeComponent implements OnInit {
  progressValue = 100; // Change the value to set the progress

  constructor() { }

  ngOnInit(): void {
  }
  statusOptions: string[] = ['All','Pending', 'Completed', 'Draft'];
  activeStatus: string = 'Pending';

  setActiveStatus(status: string) {
    this.activeStatus = status;
  }
}
