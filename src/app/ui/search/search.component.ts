import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-search',
  imports: [InputComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  isSearchActive = true;

}
