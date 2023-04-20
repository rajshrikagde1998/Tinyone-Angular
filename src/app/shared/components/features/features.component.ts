import { Component, OnInit } from '@angular/core';
import { IcardArr } from '../../model/data';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  
  featureCardArr: IcardArr[] =[
    {
      icon :'<i class="fab fa-squarespace fa-3x"></i>',
      title : 'fully responsive',
      info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.',
    },
    {
      icon :'<i class="far fa-lemon fa-3x"></i>',
      title : 'Fully Layered PSD',
      info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.',
    },
    {
      icon :' <i class="far fa-folder fa-3x"></i>',
      title : 'Font Awesome',
      info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.',
    },
    {
      icon :' <i class="fas fa-code fa-3x"></i>',
      title : 'HTML3 & CSS3',
      info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.',
    },
    {
      icon :'<i class="far fa-envelope fa-3x"></i>',
      title : 'Email Template',
      info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.',
    },
    {
      icon :' <i class="far fa-bookmark fa-3x"></i>',
      title : 'Free to download',
      info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.',
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
