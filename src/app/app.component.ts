import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MapperComponent } from "./Components/Mapper/mapper.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MapperUI';
}
