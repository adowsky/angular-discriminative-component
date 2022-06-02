import { Component, Input, OnInit } from '@angular/core';
import { AbstractModel } from './model';

@Component({
  selector: 'app-abstract-component',
  templateUrl: './abstract-component.component.html',
  styleUrls: ['./abstract-component.component.css'],
})
export class AbstractComponentComponent implements OnInit {
  @Input() model!: AbstractModel;

  constructor() {}

  ngOnInit(): void {}
}
