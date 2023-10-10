import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPrincipalComponent } from './components/main-principal/main-principal.component';
import { DetailsComponent } from './components/details/details.component';
import { ResumeComponent } from './components/resume/ResumeComponent';
import { PostComponent } from './components/post/post.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    MainPrincipalComponent,
    DetailsComponent,
    ResumeComponent,
    PostComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
