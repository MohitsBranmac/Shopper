import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProductProvider Provider');
  }

  getProducts(){
    return this.http.get('/assets/data.json')
  }
}
