import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empregado } from './empregado';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmpregadoService {

  private url = 'http://localhost:3000/funcionarios';


  constructor(private http: HttpClient) { }

  getEmpregados(): Observable <Empregado[]> {
     return this.http.get<Empregado[]>(this.url);
  }

  deleteEmpregado(id: number): Observable<Empregado> {
    const url = `${this.url}/${id}`;

    return this.http.delete<Empregado>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted empregado id=${id}`))
    );
  }

  createEmpregado(empregado: Empregado): Observable <Empregado> {
    return this.http.post<Empregado>(this.url, empregado);
  }

  updateEmpregado(empregado: Empregado): Observable <Empregado> {
    return this.http.put<Empregado>(this.url + '/' + empregado.id, empregado);
  }

  getEmpregado(id: number): Observable <Empregado> {
    return this.http.get<Empregado>(this.url + '/' + id);
  }



}
