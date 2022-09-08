import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selectedPage = new EventEmitter();

  constructor(public dataService: DataStorageService) { }

  ngOnInit(): void {
  }

  onSelected(name) {
    this.selectedPage.emit(name);
  }

  saveRecipes() {
    this.dataService.storeRecipes();
  }

  fetchRecipes() {
    this.dataService.fetchRecipes().subscribe();
  }

}
