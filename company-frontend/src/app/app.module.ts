import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyDetailsService } from './services/company-details.service';
import { AddCompanyComponent } from './add-company/add-company.component';



@NgModule({
  declarations: [
    AppComponent,
    AddCompanyComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [CompanyDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
