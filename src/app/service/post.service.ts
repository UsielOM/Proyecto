import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Registro } from '../interface/registro';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  crearRegistros(registro:Registro): Observable<Registro>{
    return this.http.post<Registro>(environment.apiUrl + "/post/userRegistro",registro);
  }
}
