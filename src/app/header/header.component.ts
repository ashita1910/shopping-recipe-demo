import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selectedPage = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(name) {
    this.selectedPage.emit(name);
  }

}
