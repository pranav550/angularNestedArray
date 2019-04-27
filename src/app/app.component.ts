import { Component } from '@angular/core';
import {FormGroup, FormControl, FormArray, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  FormGroup:FormGroup
  title = 'angularReactiveNestedArray';

  form:any;
  constructor(){}


  ngOnInit():void{
      this.form= new FormGroup({
        ContactNo: new FormArray([
          new FormControl('87897907909080'),
          new FormControl('8979789089089090')
        ])
      })
  }


  addContactNo(){
    this.form.get('ContactNo').push(new FormControl())
  }

  onSubmit(){
    console.log(this.form.get('ContactNo').value);
    console.log(this.form.value);
  }
   setPreset(){
     this.form.get('ContactNo').patchValue(['786786786786','789089090890'])
   }



}
