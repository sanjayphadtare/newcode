import { Injectable } from '@angular/core';
import { HeadcountModule } from './headcount.module';
import { BehaviorSubject } from 'rxjs';
import { filter, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeadcountService {

  private selectedHeadcountMenuSubject = new BehaviorSubject<string>(null);
  selectedHeadcountMenu$ = this.selectedHeadcountMenuSubject.asObservable().pipe(
    filter(v => !!v),
    shareReplay({ refCount: true, bufferSize: 1 })
  );

  constructor() { }

  setHeadcountMenu(menu: string) {
    this.selectedHeadcountMenuSubject.next(menu);
  }
}
