import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpenSubject.asObservable();

  open() {
    console.log('Modal opening...');
    this.isOpenSubject.next(true);
  }

  close() {
    console.log('Modal closing...');
    this.isOpenSubject.next(false);
  }
} 