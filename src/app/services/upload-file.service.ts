import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient, HttpResponseBase } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  public headers: any;
  public dataUser: any;
  private urlApi: string;

  constructor(private http: HttpClient) { }

  downloadTemplateExcel(datos?: any) {
    const headers = this.headers;
    const options = { params: datos, headers };
    return this.http.get(`${this.urlApi}/exportar_descarga_guia`,  { headers: options.headers, responseType: 'blob' });
  }

   uploadFile(datos: any, data: File, urlApiSendFiles: string ) {
    this.dataUser = JSON.parse(localStorage.getItem('identityCVE'));
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'multipart/form-data');
    this.headers.append('Accept', 'application/x-www-form-urlencoded');
    this.headers = this.headers.set('token', localStorage.getItem('tokenCVE'));
    this.dataUser = JSON.parse(localStorage.getItem('identityCVE'));

    const headers = this.headers;
    const options = { params: datos, headers };
    const formData: FormData = new FormData();
    const file = data;
    formData.append('file', file, file.name);

    return this.http.put<any>(`${this.urlApi}/${urlApiSendFiles}`, formData, options);
   }

   getFacturaPdf(params: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
    // headers = headers.set('token', 'Q0xJRU5UX0FQUC0zODQ0MWVkMjozMGJBc2lsZWlBQDA=');
    headers = headers.set('Authorization', 'Q0xJRU5UX0FQUC0zODQ0MWVkMjozMGJBc2lsZWlBQDA=');
    const url = 'http://200.41.76.26:8080/CoviLiquidaWeb/servicios';

    const httpOption: Object = {
      observe: 'response',
      params,
      headers,
      responseType: 'blob'
    };

    return this.http.get(`${url}/pdf_netsuite_factura`, httpOption).pipe(map((res: HttpResponseBase) => {
        return {
          filename: 'test.pdf',
          data: new Blob(
            [res['body']],
            { type: 'application/pdf'}
          ),
        };
    }));
  }

}
