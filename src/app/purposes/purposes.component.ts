import { Component, OnInit } from '@angular/core';
import { PURPOSE } from 'src/data';
import { Purpose } from '../models/purpose.model';

@Component({
  selector: 'app-purposes',
  templateUrl: './purposes.component.html',
  styleUrls: ['./purposes.component.scss'],
})
export class PurposesComponent implements OnInit {
  purpose: Purpose[] = PURPOSE;
  constructor() {}

  ngOnInit(): void {}
}
