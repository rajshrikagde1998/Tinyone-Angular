import { Component, OnInit } from '@angular/core';
import { Icon } from '../../model/data';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss']
})
export class InspirationComponent implements OnInit {
   iconArr: Icon[] = [
    {
      link:'javascript:;',
      icon:'<i class="fa-brands fa-apple fa-3x"></i>',
    },
    {
      link:'javascript:;',
      icon:' <i class="fab fa-android fa-3x"></i>',
    },
    {
      link:'javascript:;',
      icon:'<i class="fab fa-windows fa-3x"></i>',
    }
   ]
  constructor() { }

  ngOnInit(): void {
  }

}
