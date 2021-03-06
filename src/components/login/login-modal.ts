import { Component, EventEmitter, Input, Output } from '@angular/core';

import { RioModal, RioModalContent } from '../modal';
import { RioLoginForm } from './login-form';

@Component({
  selector: 'rio-login-modal',
  directives: [RioModal, RioModalContent, RioLoginForm],
  template: `
    <rio-modal>
      <rio-modal-content>
        <h1 class='mt0'>Login</h1>
        <rio-login-form
          [pending]="pending"
          [failure]="failure"
          (submit)="handleSubmit($event)">
        </rio-login-form>
      </rio-modal-content>
    </rio-modal>
  `
})
export class RioLoginModal {
  @Input() pending: boolean;
  @Input() failure: boolean;
  @Output() submit: EventEmitter<Object> = new EventEmitter();

  handleSubmit(login) {
    this.submit.emit(login);
  }
};
