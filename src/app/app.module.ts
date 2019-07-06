import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable, from } from  "rxjs";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule, MatRadioModule, MatSelectModule, MatDialogModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { HeadingColorDirective } from './heading-color.directive';
import { DataService } from './data.service';
import { FeedbackComponent } from './feedback/feedback.component';
import { DialogDataComponent } from './dialog-data/dialog-data.component';
import { DialogSaveComponent } from './dialog-save/dialog-save.component';
import { KeySplitPipe } from './key-split.pipe';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
    // redirectTo: '/contact'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeadingColorDirective,
    FeedbackComponent,
    DialogDataComponent,
    DialogSaveComponent,
    KeySplitPipe,
    // Observable
  ],
  entryComponents: [DialogDataComponent, DialogSaveComponent],
  imports: [
    BrowserModule,
    HttpClientModule,    
    AppRoutingModule,    
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
