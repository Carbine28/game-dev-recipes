import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {

  events: string[] = [];
  opened: boolean = true;
  
  ngOnInit()
  {
    this.opened = true;
  }

  shouldRun: boolean = true;    
}
