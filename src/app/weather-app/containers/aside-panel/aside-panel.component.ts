import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-panel',
  templateUrl: './aside-panel.component.html',
  styleUrls: ['./aside-panel.component.scss']
})
export class AsidePanelComponent implements OnInit {
  isLocationInputHidden = false;

  constructor() { }

  ngOnInit(): void {}

  togglePanel(): void {
    this.isLocationInputHidden = !this.isLocationInputHidden;
  }
}
