import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentTypePipe } from '../pipes/document-type.pipe';
import { BgUrlPipe } from '../pipes/bg-url.pipe';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UiSwitchModule } from 'ngx-ui-switch';
import { AlertColorDirective } from '../directives/alert-color.directive';
import { OutsideDirective } from '../directives/outside.directive';
import { UppercaseDirective } from '../directives/uppercase.directive';
import { OnlyNumberDirective } from '../directives/only-number.directive';
import { ReplacePipe } from '../pipes/replace.pipe';
import { FilterPipe } from '../pipes/filter.pipe';
import { SumPipe } from '../pipes/sum.pipe';
import { TooltipDirective } from '../directives/tooltip.directive';
import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [
    DocumentTypePipe,
    BgUrlPipe,
    AlertColorDirective,
    OutsideDirective,
    UppercaseDirective,
    OnlyNumberDirective,
    ReplacePipe,
    FilterPipe,
    SumPipe,
    TooltipDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxSpinnerModule,
    UiSwitchModule.forRoot({
      // size: 'small',
      color: 'rgb(61, 160, 48)',
      switchColor: '#FFFFFF',
      defaultBgColor: 'rgb(151, 151, 151)',
      defaultBoColor : '#dadada',
      checkedLabel: 'Si',
      uncheckedLabel: 'No'
    }),
    NgxDropzoneModule
  ],
  exports: [
    DocumentTypePipe,
    BgUrlPipe,
    FormsModule,
    NgxSpinnerModule,
    AlertColorDirective,
    OutsideDirective,
    UppercaseDirective,
    OnlyNumberDirective,
    ReplacePipe,
    UiSwitchModule,
    FilterPipe,
    SumPipe,
    TooltipDirective,
    NgxDropzoneModule
  ]
})
export class SharedModule { }
