import { Component, Input, OnInit } from '@angular/core';
import { Icon } from '../../model/data';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
 @Input() getIcon! : Icon[]
  @Input() ulClassName:string= 'iconList'
  constructor() { }

  ngOnInit(): void {
  }

}
