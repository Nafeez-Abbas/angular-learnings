import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParentChildDataService {

  constructor() { }

  dataSetByParent: string = '';

}
