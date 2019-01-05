import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  // 自动生成另一个表单
  profileForm1 = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ]),
  });
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  onSubmit1() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm1.value);
  }
  updatePrifile() {
    this.profileForm.patchValue({
      firstName: '修改1',
      address: {
        street: '浪潮1036',
        city: 'jinan'
      }
    });
  }
  updatePrifile1() {
    this.profileForm1.patchValue({
      firstName: '修改2',
      address: {
        street: '浪潮1036-1',
        city: 'jinan-1'
      }
    });
  }
  get aliases() {
    return this.profileForm1.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
  ngOnInit() {
    console.log(this.profileForm1);
  }

}
