import { Component, Input, OnInit } from '@angular/core';
import { Purpose } from 'src/app/models/purpose.model';

@Component({
  selector: 'app-purpose',
  templateUrl: './purpose.component.html',
  styleUrls: ['./purpose.component.scss'],
})
export class PurposeComponent implements OnInit {
  @Input() purpose: Purpose;
  constructor() {}

  ngOnInit(): void {}
}
