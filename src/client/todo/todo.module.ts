import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { TodoComponent } from './todo.component';
import { TodoRoutingModule } from './todo-routing.module';

import { SharedModule } from '../shared/shared.module';


@NgModule({
            imports: [BrowserModule, HttpModule, TodoRoutingModule, SharedModule.forRoot()],
            declarations: [TodoComponent],
            providers: [{
              provide: APP_BASE_HREF,
              useValue: '<%= APP_BASE %>'
            }],
            bootstrap: [TodoComponent]

          })
export class TodoModule { }
