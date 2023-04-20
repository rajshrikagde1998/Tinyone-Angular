import { Component, Input, OnInit } from '@angular/core';
import { IcardArr } from '../../model/data';

@Component({
  selector: 'app-feature-cards',
  templateUrl: './feature-cards.component.html',
  styleUrls: ['./feature-cards.component.scss']
})
export class FeatureCardsComponent implements OnInit {
 @Input() featureCard!: IcardArr
  constructor() { }

  ngOnInit(): void {
  }

}
