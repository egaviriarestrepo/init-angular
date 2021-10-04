import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { HelperService } from 'src/app/services/helper.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  public params = {
    tipo_documento: '',
    consecutivo: '',
    prefijo: ''
  };

  public selects = [
    { label: 'FACTURA DE VENTA', value: 'FACTURA_DE_VENTA' },
    { label: 'NOTA CREDITO', value: 'NOTA_CREDITO' },
    { label: 'NOTA DEBITO', value: 'NOTA_DEBITO' },
    { label: 'FACTURACION DE EXPORTACION', value: 'FACTURACION_DE_EXPORTACION' },
    { label: 'FACTURA DE CONTINGENCIA', value: 'FACTURA_DE_CONTINGENCIA' },
    { label: 'FACTURA DE IMPORTACION', value: 'FACTURA_DE_IMPORTACION' },
  ];


  constructor(private fileService: UploadFileService,
              private helper: HelperService) { }

  ngOnInit() {
  }

    handleSubmit() {
    this.fileService.getFacturaPdf(this.params)
        .subscribe((resp: any) => {
          const url = URL.createObjectURL(resp.data);
          window.open(url);
        }, (error: any) => {
          console.log(error);
          Swal.fire({
            type: 'error',
            title: 'Error:',
            text: error.statusText
          });
        });
    }

}
