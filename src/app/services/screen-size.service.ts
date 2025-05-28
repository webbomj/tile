import { Injectable, HostListener, signal } from '@angular/core';
import { Breakpoints } from '../core/breakpoints';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  private isMobile = signal<boolean>(this.isMobileNow())

  public isMobile$ = this.isMobile.asReadonly()

  constructor() {
    this.checkSize()
  }

  @HostListener('window:resize', ['$event'])
  checkSize(): void {
    this.isMobile.set(this.isMobileNow())
  }

  private isMobileNow(): boolean {
    return window.innerWidth <= Breakpoints.mobile
  }
}
