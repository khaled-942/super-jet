import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ToggleButtonModule } from 'primeng/togglebutton';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    KeyFilterModule,
    ToggleButtonModule
  ],
  exports:[
    DialogModule,
    InputTextModule,
    ButtonModule,
    KeyFilterModule,
    ToggleButtonModule
  ]
})
export class SharedModule { }
