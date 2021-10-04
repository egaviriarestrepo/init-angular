import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';

/*DatePicker*/
import { OWL_DATE_TIME_LOCALE, OwlDateTimeIntl, OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { LOCALE_ID, NgModule } from '@angular/core';
import localeEsCO from '@angular/common/locales/es-CO';

import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';


// Directivas
import { ColorPickerModule } from 'ngx-color-picker';
import { BgUrlPipe } from './pipes/bg-url.pipe';
import { DocumentTypePipe } from './pipes/document-type.pipe';
import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { PasswordComponent } from './auth/password/password.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

registerLocaleData(localeEsCO, 'es-Co');

export class DefaultIntl extends OwlDateTimeIntl  {
  rangeFromLabel = 'Fecha inicial';
  rangeToLabel = 'Fecha final';
  hour12AMLabel = 'AM';
  hour12PMLabel = 'PM';
  prevMultiYearLabel = '21 años atrás';
  nextMultiYearLabel = 'Próximos 21 años';
}


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    AuthComponent,
    LoginComponent,
    PasswordComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule,
    ChartsModule,
    ScrollingModule,
    Ng2SearchPipeModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ColorPickerModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'decreasing',
      maxOpened: 1,
      autoDismiss: true,
      closeButton: true
    })
  ],
  providers: [
    AuthService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: OWL_DATE_TIME_LOCALE, useValue: 'es' },
    { provide: OwlDateTimeIntl, useClass: DefaultIntl },
    { provide: LOCALE_ID, useValue: 'es-Co' }
  ],
  exports: [
    BgUrlPipe,
    DocumentTypePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
