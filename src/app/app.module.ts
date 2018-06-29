import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { FaqsComponent } from './faqs/faqs.component';
import { QuestionFilterPipe } from './faqs/question.pipe';
import { DownloadsComponent } from './downloads/downloads.component';
import { ContactComponent } from './contact/contact.component';
import { CarouselComponent } from './shared/carousel.component';
import { ContactFormComponent } from './contact/contact-form.component';
import { DesignListComponent } from './designs/design-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FaqsComponent,
    QuestionFilterPipe,
    DownloadsComponent,
    ContactComponent,
    CarouselComponent,
    ContactFormComponent,
    DesignListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    FormsModule,
    RouterModule.forRoot([
      { path:'welcome', component: WelcomeComponent },
      { path: 'faqs', component: FaqsComponent },
      { path: 'downloads', component: DownloadsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'designs', component: DesignListComponent },
      { path:'', redirectTo:'welcome', pathMatch:'full' },
      { path:'**', redirectTo:'welcome', pathMatch:'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
