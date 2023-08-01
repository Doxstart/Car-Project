import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstUpperPipe } from './pipes/first-upper.pipe';

import { TableModule } from 'primeng/table';
import { PrimeTableComponent } from './components/prime-table/prime-table.component';
import { InplaceModule } from 'primeng/inplace';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FirstUpperPipe,
        PrimeTableComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatTableModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        TableModule,
        InplaceModule
    ]
})
export class AppModule { }
