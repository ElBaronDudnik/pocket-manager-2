import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoaderService {
  public loading$: Observable<boolean>;

  private loadingBehaviorSubject$: BehaviorSubject<boolean>;

  constructor() {
    this.loadingBehaviorSubject$ = new BehaviorSubject<boolean>(false);
    this.loading$ = this.loadingBehaviorSubject$.asObservable();
  }

  public show(): void {
    console.log('show');
    this.loadingBehaviorSubject$.next(true);
  }

  public hide(): void {
    console.log('hide');
    this.loadingBehaviorSubject$.next(false);
  }

  public get loading(): boolean {
    return this.loadingBehaviorSubject$.value;
  }
}
