import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {AppRoutingModule,routingComponents} from './app.route.module';
import { APP_BASE_HREF } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  entryComponents: [AppComponent]
})

export class AppModule {
  constructor() {
  }
  // ngDoBootstrap() { }
  ngDoBootstrap(appRef: ApplicationRef) {
    const rootElements = document.querySelectorAll('app-root');
    for (const element of rootElements as any as HTMLElement[]) {
      appRef.bootstrap(AppComponent, element);
    }
  }
}
