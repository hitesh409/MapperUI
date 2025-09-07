import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { debounceTime, fromEvent, map, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  placeHolder = input<string>('Search...');
  searchString = signal<string>('');

  private searchSubject = new Subject<string>();

  constructor(){
    this.searchSubject.pipe(debounceTime(400)).subscribe((value)=>{
      this.searchString.set(value)
    })
  }

  onSearchInput(e:any){
    this.searchSubject.next(e.target.value);
  }
}
