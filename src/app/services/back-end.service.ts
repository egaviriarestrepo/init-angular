import { Injectable  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { IdentityModel } from '../models/identity.model';
import { map } from 'rxjs/operators';
import * as _moment from 'moment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {
  protected ngUnsubscribe: Subject<void> = new Subject<void>();

// properties
 private urlApi: string;

public identity = new IdentityModel();
public token: any;
public DatosUsuario = new IdentityModel();
public Headers: any;

  constructor( public http: HttpClient ) {
    this.urlApi = environment.urlApi;
    this.DatosUsuario = JSON.parse(localStorage.getItem('identityCVE'));

    this.Headers = new HttpHeaders();
    this.Headers = this.Headers.set('Content-Type', 'application/x-www-form-urlencoded');
    this.Headers = this.Headers.set('token', localStorage.getItem('tokenCVE'));
  }


 getquery(query: string, afiliado: any) {
  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
  headers = headers.set('token', localStorage.getItem('tokenCVE'));
  this.DatosUsuario = JSON.parse(localStorage.getItem('identityCVE'));

  const options = { params: afiliado, headers };
  return this.http.get(`${this.urlApi}/${query}`, options);
  }

  GetReporteCartera(afiliado: object) {
    return this.getquery('pr_reporte_cartera_afiliado', afiliado);
  }

  GetReporteDeudores(afiliado: object) {
    return this.getquery('pr_reporte_deudores_afiliado', afiliado);
  }

    // Cambiar Password
    CambiarPassword(nuevo: any) {
      return this.getquery('pr_buscar', nuevo);
    }


  }
