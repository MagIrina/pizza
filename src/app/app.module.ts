import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {FooterComponent} from "./shared/layout/footer/footer.component";
import {HeaderComponent} from "./shared/layout/header/header.component";
import {LayoutComponent} from "./views/layout.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  //что бы ngModule заработал
    HttpClientModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
