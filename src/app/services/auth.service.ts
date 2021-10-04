import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IdentityModel } from 'src/app/models/identity.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // properties
   private urlApi: string;
   public Headers: HttpHeaders;

   public DatosUsuario: IdentityModel = new IdentityModel();

  userToken: any;
  visible: boolean;

  constructor( private http: HttpClient ) {
    this.urlApi = environment.urlApi;
    this.visible = false;
    this.ReadToken();
  }

  // Login
  login( usuario: any  ) {
    this.IsAutenticated();
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    usuario.contrasena = usuario.contrasena;
    usuario.app_covinoc = environment.app;
    const options = {
      params: null, headers
    };

    return this.http.post(
      `${this.urlApi}/inicio_sesion` , usuario,  options
    ).pipe(
      map( (resp: any) => {
         // Expira token
         const expiraToken = new Date(resp.expira);
         localStorage.setItem('expiresCRE', expiraToken.getTime().toString());
         this.saveToken( resp['TOKEN'] );
         return resp;
      })
    );

  }


  // Password
  ActualizarPassword(datos: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('token', localStorage.getItem('tokenCVE'));
    const options = {
      params: null, headers
    };
    return  this.http.post(`${this.urlApi}/pr_actualiza_contrasena_usuarios` , datos,  options);
  }

  // Guardar Token
  private saveToken( token: string ) {
    this.userToken = token;
    localStorage.setItem('tokenCVE', token);
  }

  // Leer Token

  ReadToken() {

    if ( localStorage.getItem('tokenCVE') ) {
      this.userToken = localStorage.getItem('tokenCVE');
    } else {
      this.userToken = '';
    }

    return this.userToken;

  }

  // Logout

  ValidarOlvideMiContrasena(usuario: string, app_covinoc: string) {
    this.Headers = new HttpHeaders();
    this.Headers = this.Headers.set('Content-Type', 'application/x-www-form-urlencoded');

    const headers = this.Headers;
    const body = { usuario, app_covinoc };
    const options = { params: body, headers };

    return this.http.post(`${this.urlApi}/solicitar_cambio_contrasena`, body, options );
  }

  OlvideMiContrasena(token_cambio: string, nueva_contrasena: string) {
    this.Headers = new HttpHeaders();
    this.Headers = this.Headers.set('Content-Type', 'application/json');

    const headers = this.Headers;
    const body = { token_cambio, nueva_contrasena };
    const options = { params: null, headers };

    return this.http.post(`${this.urlApi}/cambiar_contrasena`, body, options );
  }

  logout() {
    localStorage.removeItem('tokenCVE');
  }


// Get identity

GetIdentity() {
 return this.DatosUsuario = JSON.parse(localStorage.getItem('identityCVE'));
}

// Validar Autenticación
IsAutenticated(): boolean {
const today = new Date().getTime();
const expira = Number(localStorage.getItem('expiresCRE'));
if (localStorage.getItem('tokenCVE') === undefined || localStorage.getItem('tokenCVE') === null || expira < today) {
    return false;
  } else {
    return this.userToken;
  }
}

ConsultaContratosWeb(datos: any) {
  this.DatosUsuario = JSON.parse(localStorage.getItem('identityCVE'));
  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
  headers = headers.set('token', localStorage.getItem('tokenCVE'));

  const options = { params: datos, headers };
  return this.http.get(`${this.urlApi}/pr_consulta_contratos_web`, options);
}

// Barra de navegación
hide() { this.visible = false; }
show() { this.visible = true; }
toggle() { this.visible = !this.visible; }


}
