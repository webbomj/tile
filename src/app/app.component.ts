import { Component } from '@angular/core';
import { HeaderComponent } from "./ui/header/header.component";
@Component({
  selector: 'app-root',
  imports: [ HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
