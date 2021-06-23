import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface InfoInput {
  id: string;
  name: string;
  title: string;
  placeholder: string;
  formControlName: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form!: FormGroup;
  @Input('inputs') infoInputs!: InfoInput[];
  @Output('formValue') formValue: EventEmitter<any> = new EventEmitter<any>();
  public error: boolean = false;


  constructor() { }

  ngOnInit(): void {
    if (this.infoInputs) this.CrearFormulario();
  }

  public CrearFormulario() {
    let controls: any = {};

    this.infoInputs.forEach(el => {
      controls[el.formControlName] = new FormControl('', Validators.required);
    });

    this.form = new FormGroup(controls);
  }

  public ObtenerForm() {
    if (this.form.invalid) {
      this.error = true;
      return;
    }
    else
      this.error = false;

    this.formValue.emit(this.form.value);
    this.form.reset();
  }

}
