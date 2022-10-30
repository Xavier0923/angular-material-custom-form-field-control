import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material module import
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CustomFormFieldComponent } from './custom-form-field/custom-form-field.component';
import { SelectGroupComponent } from './select-group/select-group.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatIconModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    CustomFormFieldComponent,
    SelectGroupComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
