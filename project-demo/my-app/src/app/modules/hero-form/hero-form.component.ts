import { Component, OnInit } from '@angular/core';
import { HeroForm } from './models/hero';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new HeroForm(18, 'Dr IQ', this.powers[0], '', [{ name: '鸡', value: false }, { name: '鱼', value: false }], 'Chuck Overstreet');
  submitted = false;

  onSubmit(heroForm: NgForm) {
    console.log(heroForm);
    console.log(heroForm.value);
    console.log(heroForm.valid);
    if (heroForm.value.selected && heroForm.value.sex !== void 0) {
      this.submitted = true;
    } else {
      alert('有未选择项');
    }
  }
  newHero() {
    this.model = new HeroForm(42, '', '', '', [], '');
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  constructor() { }

  ngOnInit() {
  }
  
}
