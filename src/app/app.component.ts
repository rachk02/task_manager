import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent} from './task-list/task-list.component';

@Component({
  imports: [RouterOutlet,
    TaskListComponent],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.css',
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/src/assets/logo.ico" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-task-list></app-task-list>
    </section>
  </main>
`,
})
export class AppComponent {
  title = 'tasks';
}
