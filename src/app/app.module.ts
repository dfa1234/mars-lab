import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {RoversModule} from './rovers/rovers.module';
import {ServicesModule} from './core/services/services.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PhotosModule} from './photos/photos.module';
import {WidgetsModule} from './core/widgets/widgets.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Widgets
    WidgetsModule,
    // Services
    ServicesModule,
    HttpClientModule,
    // Feature Modules
    RoversModule,
    PhotosModule,
    // Routing
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
