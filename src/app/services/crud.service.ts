import { HttpClient, HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url:string = "https://localhost:8000/";
  private marqueEdit;
  private quincaillerieServ : any;
  constructor(private httpclient : HttpClient) { }

  get(route:string){
    return this.httpclient.get(this.url+""+route);
  }

  delete(route:String){
    return this.httpclient.delete(this.url+""+route);
  }
  
  deletes(route:String, ids: any){
    return this.httpclient.patch(this.url+""+route,ids);
  }
  
  update(route:String, marque : any){
    return this.httpclient.put(this.url+""+route,marque);
  }
  add(route:String, marque : any){
    return this.httpclient.post(this.url+""+route,marque);
  }
  cloner(route:String, marque : any){
    return this.httpclient.post(this.url+""+route,marque);
  }
  
  public getQuincaillerieServ(){
    return this.quincaillerieServ;
  }
  public setQuincaillerieServ(quincaillerieServ : any){
    this.quincaillerieServ = quincaillerieServ;

  }

}
