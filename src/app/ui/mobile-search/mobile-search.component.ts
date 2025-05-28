import { Component, output } from '@angular/core';
import { InputComponent } from "../input/input.component";
import { MobileCheckboxComponent } from "../mobile-checkbox/mobile-checkbox.component";

@Component({
  selector: 'app-mobile-search',
  imports: [InputComponent, MobileCheckboxComponent],
  templateUrl: './mobile-search.component.html',
  styleUrl: './mobile-search.component.scss'
})
export class MobileSearchComponent {
  closeSearch = output<string>()

  onArrowTap() {
    this.closeSearch.emit('close')
  }
}
