import { Component, effect, inject, ViewChild, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '../../Util/search/search/search.component';
import { MapperService, MappingModel } from './mapper.service';

@Component({
  selector: 'app-mapper',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchComponent],
  templateUrl: './mapper.component.html',
  styleUrl: './mapper.component.scss',
})
export class MapperComponent {
  unmappedArray: MappingModel[] = [];
  mappedArray: MappingModel[] = [];

  @ViewChild('unmappedSearch') unmappedSearch!: SearchComponent;
  @ViewChild('mappedSearch') mappedSearch!: SearchComponent;
  mapperService = inject(MapperService)

  constructor() {
    effect(() => {
      const searchUnmapped = this.unmappedSearch?.searchString() || '';
      const searchMapped = this.mappedSearch?.searchString() || '';
      console.log(searchMapped, searchUnmapped);
    });
  }

  ngOnInit(){
    this.mapperService.unmappedArray = [
      {id:1,title:'Item-1'},
      {id:2,title:'Item-2'},
      {id:3,title:'Item-3'},
      {id:4,title:'Item-4'},
      {id:5,title:'Item-5'},
      {id:6,title:'Item-6'},
      {id:7,title:'Item-7'},
      {id:8,title:'Item-8'},
      {id:9,title:'Item-9'},
      {id:10,title:'Item-10'},
      {id:11,title:'Item-11'},
      {id:12,title:'Item-12'},
      {id:13,title:'Item-13'},
      {id:14,title:'Item-14'},
      {id:15,title:'Item-15'}
    ];
    this.mapperService.mappedArray = [];
    this.unmappedArray = [...this.mapperService.unmappedArray]
    this.mappedArray = [...this.mapperService.mappedArray]
  }

  onMapUnmapItems(item: MappingModel, isMapping: boolean) {
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

  onSave(){
    this.mapperService.unmappedArray = [...this.unmappedArray];
    this.mapperService.mappedArray = [...this.mappedArray];
  }

  onCancel(){
    this.unmappedArray = [...this.mapperService.unmappedArray];
    this.mappedArray = [...this.mapperService.mappedArray];
  }

}
