import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';




import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { AuthEffects } from 'src/effects/auth.effect';
import { authReducer, noteReducer } from 'src/reducers/auth.reducer';
import { provideStorage,getStorage } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      auth:authReducer,
      note:noteReducer,

    }, {}),
    EffectsModule.forRoot([
      AuthEffects,

    ]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // provideStorage(() => getStorage()),
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()),



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
