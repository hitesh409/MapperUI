import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MapperService {

  unmappedArray!: MappingModel[]
  mappedArray!: MappingModel[]
}

export interface MappingModel {
  id: number;
  title: string;
}
