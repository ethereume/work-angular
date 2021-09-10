import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public register$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  constructor() { }

  public registerSucces() {
    this.register$.next(true);
  }
}
