import { Component, effect, ViewChild, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from "../../../Util/search/search/search.component";

interface MappingModel{
  id:number,
  title:string
}

@Component({
  selector: 'app-mapper',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchComponent],
  templateUrl: './mapper.component.html',
  styleUrl: './mapper.component.scss'
})
export class MapperComponent {
  unmappedArray: MappingModel[] = [
    { id: 1, title: 'item1' },
    { id: 2, title: 'item2' },
    { id: 3, title: 'item3' },
    { id: 4, title: 'item4' },
    { id: 5, title: 'item5' },
    { id: 6, title: 'item6' },
    { id: 7, title: 'item7' },
    { id: 8, title: 'item8' },
    { id: 9, title: 'item9' },
    { id: 10, title: 'item10' },
  ];
  mappedArray: MappingModel[] = [
    { id: 6, title: 'item6' },
    { id: 7, title: 'item7' },
    { id: 8, title: 'item8' },
    { id: 9, title: 'item9' },
    { id: 10, title: 'item10' },
  ];
  

  @ViewChild('unmappedSearch') unmappedSearch! : SearchComponent;
  @ViewChild('mappedSearch') mappedSearch! : SearchComponent;

  constructor(){
    effect(()=>{
      debugger;
      const searchUnmapped = this.unmappedSearch?.searchString() || ''  
      const searchMapped = this.mappedSearch?.searchString() || ''  
      console.log(searchMapped,searchUnmapped)
    })
  }
}
