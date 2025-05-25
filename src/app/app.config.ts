import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes} from '@angular/router';
import { TodoComponent } from './features/todo/todo.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'todo', component: TodoComponent},
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes)]
};