import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShellComponent } from './shell/shell.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    TodoFormComponent,
    TodoListComponent,
  ],
  imports: [BrowserModule, CoreModule, ReactiveFormsModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
