import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-mobile-checkbox',
  imports: [],
  templateUrl: './mobile-checkbox.component.html',
  styleUrl: './mobile-checkbox.component.scss'
})
export class MobileCheckboxComponent {
  text = input.required<string>()
  isChecked = signal(false)

  onCheckboxTap() {
    this.isChecked.update(value => !value)
  } 
}
