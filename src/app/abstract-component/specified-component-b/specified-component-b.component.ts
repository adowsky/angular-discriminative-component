import { Component, Input, OnInit } from '@angular/core';
import { ModelB } from '../model';

@Component({
  selector: 'app-specified-component-b',
  templateUrl: './specified-component-b.component.html',
  styleUrls: ['./specified-component-b.component.css']
})
export class SpecifiedComponentBComponent implements OnInit {
  @Input() model!: ModelB;
  
  constructor() { }

  ngOnInit(): void {
  }

}
