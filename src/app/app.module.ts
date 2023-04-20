import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { DownloadSectionComponent } from './download-section/download-section.component';
import { SuperchargeSectionComponent } from './supercharge-section/supercharge-section.component';
import { AccessClipboardComponent } from './access-clipboard/access-clipboard.component';
import { KeeptrackComponent } from './keeptrack/keeptrack.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DownloadSectionComponent,
    SuperchargeSectionComponent,
    AccessClipboardComponent,
    KeeptrackComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
