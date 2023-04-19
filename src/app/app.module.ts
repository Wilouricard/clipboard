import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { DownloadSectionComponent } from './download-section/download-section.component';
import { SuperchargeSectionComponent } from './supercharge-section/supercharge-section.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DownloadSectionComponent,
    SuperchargeSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
