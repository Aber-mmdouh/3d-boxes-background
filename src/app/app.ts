import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Threed } from "../components/threed/threed";

@Component({
  selector: 'app-root',
  imports: [ Threed],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('3D');
}
