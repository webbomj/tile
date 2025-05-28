import { Component, signal, viewChild, ElementRef } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import {trigger, state, style, animate, transition } from '@angular/animations';

type SearchState = 'hidden' | 'visible';

@Component({
  selector: 'app-header',
  imports: [SearchComponent ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations:  [
    trigger('slideInOut', [
      state('hidden', style({ transform: 'translateX(100%)', overflow: 'hidden', display: 'none'})),
      state('visible', style({ transform: 'translateX(0)', display: 'block'})),
      transition('hidden <=> visible', animate('250ms ease-in-out')),
    ])
  ],
  host: {
    '(click)': 'closeSearch($event)'
  }
})
export class HeaderComponent {
  searchState: SearchState = 'hidden'
  badgeCount = signal(32)
  isShowDropDown = signal(false);
  inputWrapper = viewChild.required<ElementRef>('searchRef')

  openSearch(event: Event) {
    event.stopPropagation();
    if (event.target === event.currentTarget) {
      this.searchState = 'visible'
    }
  }
  closeSearch(event: PointerEvent) {
    const searchContainer = this.inputWrapper()?.nativeElement as HTMLElement;
    if (!searchContainer) return;

    const target = event.target as HTMLElement

    const input = searchContainer.querySelector('.search')
    const dropdown = searchContainer.querySelector('.dropdown')
    if (
      !searchContainer.contains(target) ||
      (input && !input.contains(target)) &&
      (dropdown && !dropdown.contains(target))
    ) {
      this.isShowDropDown.set(false)
      this.searchState = 'hidden'
    }
  }
}