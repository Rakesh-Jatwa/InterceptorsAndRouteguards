import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { PersonComponent } from './person/person.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GuardservicesGuard } from './guardservices.guard';
import { UserServiceService } from './user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptProviders } from './http-interceptors';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    PersonComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [GuardservicesGuard, UserServiceService, httpInterceptProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
