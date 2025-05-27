import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from './ui/input/input.component';
import { SearchComponent } from "./ui/search/search.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
}
