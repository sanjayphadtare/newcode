import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeadcountMenus } from '../shared/config/constants';
import { HeadcountService } from './headcount.service';
import { AppService } from '../app.service';

@Component({
  selector: 'pion-headcount',
  templateUrl: './headcount.component.html',
  styleUrls: ['./headcount.component.scss']
})
export class HeadcountComponent implements OnInit {

  selectedMenu$: Observable<string>;
  Menus = HeadcountMenus;
  
  constructor(private headcountService: HeadcountService, private appService: AppService) {
    this.selectedMenu$ = this.headcountService.selectedHeadcountMenu$;
  }

  ngOnInit() {
    this.headcountService.setHeadcountMenu(this.Menus.HEADCOUNT);
  }

  navigateByUrl(url: string) {
    this.appService.navigateByUrl(url);
  }

  setMenu(menu: string) {
    this.headcountService.setHeadcountMenu(menu);
  }
}
