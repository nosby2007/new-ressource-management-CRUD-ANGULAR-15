import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl= 'http://localhost:3000/itemList';

  constructor(private http:HttpClient) { }
  //postLogique

  postProduct(data: any){
    return this.http.post<any>("http://localhost:3000/productList",data);
  }
  postAllocation(data: any){
    return this.http.post<any>("http://localhost:3000/allocationList",data);
  }
  postItem(data: any){
    return this.http.post<any>("http://localhost:3000/itemList",data);
  }

  //getLogique
  getProduct(){
    return this.http.get<any>("http://localhost:3000/productList")
  }
  
  getAllocation(){
    return this.http.get<any>("http://localhost:3000/allocationList")
  }
  getItem(){
    return this.http.get<any>("http://localhost:3000/itemList")
  }

  //delete logique
  deleteProduct(id:number){
    return this.http.delete<any>("http://localhost:3000/productList"+ '/'+ id);
  }
  deleteItem(id:number){
    return this.http.delete<any>("http://localhost:3000/itemList"+ '/' + id);
  }

  //update data
  putProduct( data:any,id:number):Observable<any>{
    return this.http.put("http://localhost:3000/productList"+id, data.id);
  }
}
