import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
  selector: '[customMin][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CustomMindirective,
    multi: true,
  }]
})
export class CustomMindirective implements Validator {
  @Input() minimo!: number;

  constructor() { }

  validate(control: FormControl) {
    const inputValue = control.value;
    // console.log(this.minimo);

    // console.log(inputValue);
    return (inputValue < this.minimo)
      ? { 'customMin': true }
      : null;
  }

}
