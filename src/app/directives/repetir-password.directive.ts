import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appRepetirPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RepetirPasswordDirective, multi: true }]
})
export class RepetirPasswordDirective implements Validator {
  @Input('appRepetirPassword') passwordControlName: string = '';

  validate(control: AbstractControl): ValidationErrors | null {
    const password = control.parent?.get(this.passwordControlName);

    if (password && control.value !== password.value) {
      return { mismatch: true };
    }

    return null;
  }
}


