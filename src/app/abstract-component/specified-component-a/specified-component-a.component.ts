import { Component, Input, OnInit } from '@angular/core';
import { ModelA } from '../model';

@Component({
  selector: 'app-specified-component-a',
  templateUrl: './specified-component-a.component.html',
  styleUrls: ['./specified-component-a.component.css'],
})
export class SpecifiedComponentAComponent implements OnInit {
  @Input() model!: ModelA;

  constructor() {}

  ngOnInit(): void {}
}
