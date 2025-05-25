import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes} from '@angular/router';
import { TodoComponent } from './features/todo/todo.component';

export const routes: Routes = [
  {path: 'todo', component: TodoComponent},
  {path: '', redirectTo: 'todo', pathMatch: 'full'},
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes)]
};