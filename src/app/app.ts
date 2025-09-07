import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavbar } from "./components/side-navbar/side-navbar";
import { User } from "./components/user/user";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideNavbar, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angulartuto');
}
