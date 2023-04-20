import { Component, OnInit } from '@angular/core';
import { Icon } from '../../model/data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  iconArr: Icon[] = [
    {
      link:'javascript:;',
      icon:'<i class="fab fa-facebook-square fa-3x"></i>',
    },
    {
      link:'javascript:;',
      icon:'  <i class="fab fa-twitter-square fa-3x"></i>',
    },
    {
      link:'javascript:;',
      icon:'<i class="fab fa-google-plus-square fa-3x"></i>',
    },
    {
      link:'javascript:;',
      icon:'<i class="fab fa-pinterest-square fa-3x"></i>',
    },
   ]
   footerlink1: Icon[] = [
    {
      link:'javascript:;',
      icon:'Examples ',
    },
    {
      link:'javascript:;',
      icon:'Shop',
    },
    {
      link:'javascript:;',
      icon:' License',
    }
   ]
   footerlink2: Icon[] = [
    {
      link:'javascript:;',
      icon:'Contact  ',
    },
    {
      link:'javascript:;',
      icon:'About ',
    },
    {
      link:'javascript:;',
      icon:' Privacy',
    },
    {
      link:'javascript:;',
      icon:' Terms',
    }
   ]
   footerlink3: Icon[] = [
    {
      link:'javascript:;',
      icon:'Download ',
    },
    {
      link:'javascript:;',
      icon:'Support',
    },
    {
      link:'javascript:;',
      icon:' Documents',
    }
   ]
   footerlink4: Icon[] = [
    {
      link:'javascript:;',
      icon:'Media ',
    },
    {
      link:'javascript:;',
      icon:'Blog',
    },
    {
      link:'javascript:;',
      icon:' Forums',
    }
   ]

   footerLonk =[this.footerlink1,this.footerlink2,this.footerlink3,this.footerlink4]
  constructor() { }

  ngOnInit(): void {
  }

}
