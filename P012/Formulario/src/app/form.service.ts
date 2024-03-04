import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private formChangesSubject: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor() {}

  getFormChanges(): Observable<any> {
    return this.formChangesSubject.asObservable();
  }

  trackFormChanges(form: FormGroup) {
    form.valueChanges.subscribe((changes) => {
      this.formChangesSubject.next({ type: 'valueChanges', changes });
    });

    form.statusChanges.subscribe((status) => {
      this.formChangesSubject.next({ type: 'statusChanges', status });
    });
  }
}
