import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VagasComponent } from './components/vagas/vagas.component';
import { FinanceiroComponent } from './components/financeiro/financeiro.component';
import { SpotComponent } from './components/spot/spot.component';
import { CardComponent } from './components/card/card.component';
import { ModalRegisterComponent } from './components/modal-register/modal-register.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VagasComponent,
    FinanceiroComponent,
    SpotComponent,
    CardComponent,
    ModalRegisterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
