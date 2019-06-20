import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CustomMaterialModule} from './core/material.module';
import {AppRoutingModule} from './core/app.routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RegisterComponent} from './register/register.component';
import {IndexComponent} from './index/index.component';
import { HttpClientModule} from '@angular/common/http';
import {BlocklyLearnComponent} from './blockly-learn/blockly-learn.component';
import {DynamicLoadingIntroductionDirective} from './dynamic-loading-introduction.directive';
import {UserInfoComponent} from './user-info/user-info.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {HtmlPipe} from '../data/HtmlPipe';

import {
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
} from '@angular/material';

import {BlocklyProgramComponent} from './blockly-program/blockly-program.component';
import {BlocklyService} from './blockly-program/service/blockly.service';
import {OverviewRootComponent} from './overview-root/overview-root.component';
import { DialogComponent } from './dialog/dialog.component';
import { HistoryTableComponent } from './history-table/history-table.component';
import { QuickStartComponent } from './quick-start/quick-start.component';

export const t = window['Blockly'];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        RegisterComponent,
        IndexComponent,
        BlocklyLearnComponent,
        DynamicLoadingIntroductionDirective,
        UserInfoComponent,
        BlocklyProgramComponent,
        OverviewRootComponent,
        HtmlPipe,
        DialogComponent,
        HistoryTableComponent,
        QuickStartComponent,
    ],
    entryComponents: [DialogComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CustomMaterialModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        NgxChartsModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatStepperModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        ReactiveFormsModule,
    ],
    providers: [
        {
            provide: BlocklyService, useFactory: () => {
                return new BlocklyService(t);
            }
        }
    ],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}
