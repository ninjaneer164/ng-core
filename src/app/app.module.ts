import {
    BrowserModule
} from '@angular/platform-browser';
import {
    NgModule
} from '@angular/core';

import {
    AppComponent
} from './app.component';

import {
    EventService
} from './_core';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        EventService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
