import { MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatDividerModule,
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatInputModule, 
  MatSelectModule,
  MatDialogModule,
  MatProgressBarModule,
  MatProgressSpinnerModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components-4-route/dashboard/dashboard.component';
import { ManageUserComponent } from './components-4-route/manage-user/manage-user.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';

import { HttpClientModule  } from '@angular/common/http';
import { HttpInterceptorProvider } from './providers/honor-interceptor-provider';
import { ErrorHandlerProvider } from './providers/global-error-handle-provider';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserUpsertDialogComponent } from './components/user-upsert-dialog/user-upsert-dialog.component';
import { HonorCardComponent } from './components/honor-card/honor-card.component';
//import {ToastrModule} from 'ngx-toastr';
import {NotificationModule} from '@services/notification.service';
import { BaseComponent } from './components/base/base.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
// define route
const routes: Routes = [
  { path: '', redirectTo:'/dashboard',pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'manage-user', component: ManageUserComponent },
  //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    DashboardComponent,
    ManageUserComponent,
    MenuItemComponent,
    UserListComponent,
    UserUpsertDialogComponent,
    HonorCardComponent,
    BaseComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NotificationModule,

    //materia module
    MatButtonModule, 
    MatCheckboxModule,
    MatMenuModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  providers: [
    HttpInterceptorProvider,
    ErrorHandlerProvider
  ],
  entryComponents:[UserUpsertDialogComponent],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }


