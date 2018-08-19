import { Component } from '@angular/core';

import { Hero }    from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  describe= {
    desc : 'Justify your reason..'
  }
  powers = ['TELECOM', 'BFSI',
            'INFRA', 'HEALTHCARE'];

  model = new Hero(18, 'Vivek', this.powers[0], 'Adam');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
  }
  
}