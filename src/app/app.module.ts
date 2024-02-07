import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SaahakuComponent } from './saahaku/saahaku.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaamuistiComponent } from './saamuisti/saamuisti.component';

@NgModule({
  declarations: [AppComponent, SaahakuComponent, SaamuistiComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
