import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirstIntcptInterceptor } from 'projects/second-app/first-intcpt.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeChildComponent } from './home-child/home-child.component';
import { Routes } from '@angular/router';
import { SampleDirective } from './sample.directive';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HomeChildComponent,
    SampleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:FirstIntcptInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
