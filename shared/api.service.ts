import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 readonly url="http://localhost:3000/";
  constructor(private http:HttpClient) { }

   AddEmp(user:any):Observable<any>{
    return this.http.post(this.url+'EMP',user);
   } 

   GetEmp():Observable<any>{
    return this.http.get(this.url+'EMP');
   } 
   DeleteEmpByID(id:any):Observable<any>{
    return this.http.delete(this.url+'EMP/'+id);
   } 

   GetEmpByID(id:any):Observable<any>{
    return this.http.get(this.url+'EMP/'+id);
   } 
}
