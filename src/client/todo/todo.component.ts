import { Component } from '@angular/core';
import { Config } from '../shared/config/env.config';

/**
 * This class represents the main application component.
 */
@Component({
             moduleId: module.id,
             selector: 'sd-app',
             templateUrl: 'todo.component.html',
             styleUrls: ['todo.component.css'],
           })
export class TodoComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
