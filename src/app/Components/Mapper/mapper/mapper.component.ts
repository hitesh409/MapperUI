import { Component, effect, ViewChild, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '../../../Util/search/search/search.component';

interface MappingModel {
  id: number;
  title: string;
}

@Component({
  selector: 'app-mapper',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchComponent],
  templateUrl: './mapper.component.html',
  styleUrl: './mapper.component.scss',
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
    { id: 16, title: 'item16' },
    { id: 17, title: 'item17' },
    { id: 18, title: 'item18' },
    { id: 19, title: 'item19' },
    { id: 20, title: 'item20' },
  ];

  @ViewChild('unmappedSearch') unmappedSearch!: SearchComponent;
  @ViewChild('mappedSearch') mappedSearch!: SearchComponent;

  constructor() {
    effect(() => {
      debugger;
      const searchUnmapped = this.unmappedSearch?.searchString() || '';
      const searchMapped = this.mappedSearch?.searchString() || '';
      console.log(searchMapped, searchUnmapped);
    });
  }

  onMapUnmapItems(item: MappingModel, isMapping:boolean) {
    if (isMapping) {
      this.unmappedArray.splice(
        this.unmappedArray.findIndex((it) => it.id === item.id),
        1
      );
      this.mappedArray.push(item);
    } else {
      this.mappedArray.splice(
        this.mappedArray.findIndex((it) => it.id === item.id),
        1
      );
      this.unmappedArray.push(item);
      this.unmappedArray.sort((a, b) => a.id - b.id);
    }
  }
}
