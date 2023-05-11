import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkAccordionModule } from '@angular/cdk/accordion';

import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';


import { NgApexchartsModule } from "ng-apexcharts";
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxGaugeModule } from 'ngx-gauge';
import { NgChartsModule } from 'ng2-charts';
import { NgxEditorModule } from 'ngx-editor';
import { QuillModule } from 'ngx-quill';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';


import { ApexchartsComponent } from './components/charts/apexcharts/apexcharts.component';
import { DashedLineChartComponent } from './components/charts/apexcharts/dashed-line-chart/dashed-line-chart.component';
import { GradientLineChartComponent } from './components/charts/apexcharts/gradient-line-chart/gradient-line-chart.component';
import { ZoomableLineChartComponent } from './components/charts/apexcharts/zoomable-line-chart/zoomable-line-chart.component';
import { BasicLineChartComponent } from './components/charts/apexcharts/basic-line-chart/basic-line-chart.component';
import { SteplineLineChartComponent } from './components/charts/apexcharts/stepline-line-chart/stepline-line-chart.component';
import { BrushLineChartComponent } from './components/charts/apexcharts/brush-line-chart/brush-line-chart.component';
import { SyncingLineChartComponent } from './components/charts/apexcharts/syncing-line-chart/syncing-line-chart.component';
import { BasicAreaChartComponent } from './components/charts/apexcharts/basic-area-chart/basic-area-chart.component';
import { SplineAreaChartComponent } from './components/charts/apexcharts/spline-area-chart/spline-area-chart.component';
import { DatetimeAreaChartComponent } from './components/charts/apexcharts/datetime-area-chart/datetime-area-chart.component';
import { NegativeAreaChartComponent } from './components/charts/apexcharts/negative-area-chart/negative-area-chart.component';
import { StackedAreaChartComponent } from './components/charts/apexcharts/stacked-area-chart/stacked-area-chart.component';
import { MissingAreaChartComponent } from './components/charts/apexcharts/missing-area-chart/missing-area-chart.component';
import { GithubAreaChartComponent } from './components/charts/apexcharts/github-area-chart/github-area-chart.component';
import { BasicColumnChartComponent } from './components/charts/apexcharts/basic-column-chart/basic-column-chart.component';
import { DatalabelsColumnChartComponent } from './components/charts/apexcharts/datalabels-column-chart/datalabels-column-chart.component';
import { StackedColumnChartComponent } from './components/charts/apexcharts/stacked-column-chart/stacked-column-chart.component';
import { RangeColumnChartComponent } from './components/charts/apexcharts/range-column-chart/range-column-chart.component';
import { RotatedLabelsColumnChartComponent } from './components/charts/apexcharts/rotated-labels-column-chart/rotated-labels-column-chart.component';
import { DistributedColumnChartComponent } from './components/charts/apexcharts/distributed-column-chart/distributed-column-chart.component';
import { LineColumnChartComponent } from './components/charts/apexcharts/line-column-chart/line-column-chart.component';
import { MultipleYaxisChartComponent } from './components/charts/apexcharts/multiple-yaxis-chart/multiple-yaxis-chart.component';
import { LineAreaChartComponent } from './components/charts/apexcharts/line-area-chart/line-area-chart.component';
import { LineColumnAreaChartComponent } from './components/charts/apexcharts/line-column-area-chart/line-column-area-chart.component';
import { BasicRangeAreaChartComponent } from './components/charts/apexcharts/basic-range-area-chart/basic-range-area-chart.component';
import { BasicTimelineChartComponent } from './components/charts/apexcharts/basic-timeline-chart/basic-timeline-chart.component';
import { BasicCandlestickChartComponent } from './components/charts/apexcharts/basic-candlestick-chart/basic-candlestick-chart.component';
import { BasicBoxplotChartComponent } from './components/charts/apexcharts/basic-boxplot-chart/basic-boxplot-chart.component';
import { BasicBubbleChartComponent } from './components/charts/apexcharts/basic-bubble-chart/basic-bubble-chart.component';
import { BasicScatterChartComponent } from './components/charts/apexcharts/basic-scatter-chart/basic-scatter-chart.component';
import { BasicHeatmapChartComponent } from './components/charts/apexcharts/basic-heatmap-chart/basic-heatmap-chart.component';
import { BasicTreemapChartComponent } from './components/charts/apexcharts/basic-treemap-chart/basic-treemap-chart.component';
import { BasicPieChartComponent } from './components/charts/apexcharts/basic-pie-chart/basic-pie-chart.component';
import { PieDonutChartComponent } from './components/charts/apexcharts/pie-donut-chart/pie-donut-chart.component';
import { PieMonochromeChartComponent } from './components/charts/apexcharts/pie-monochrome-chart/pie-monochrome-chart.component';
import { BasicRadialbarChartComponent } from './components/charts/apexcharts/basic-radialbar-chart/basic-radialbar-chart.component';
import { MultipleRadialbarChartComponent } from './components/charts/apexcharts/multiple-radialbar-chart/multiple-radialbar-chart.component';
import { CircleRadialbarChartComponent } from './components/charts/apexcharts/circle-radialbar-chart/circle-radialbar-chart.component';
import { GradientRadialbarChartComponent } from './components/charts/apexcharts/gradient-radialbar-chart/gradient-radialbar-chart.component';
import { StrokedRadialbarChartComponent } from './components/charts/apexcharts/stroked-radialbar-chart/stroked-radialbar-chart.component';
import { CircularRadialbarChartComponent } from './components/charts/apexcharts/circular-radialbar-chart/circular-radialbar-chart.component';
import { BasicRadarChartComponent } from './components/charts/apexcharts/basic-radar-chart/basic-radar-chart.component';
import { MultipleRadarChartComponent } from './components/charts/apexcharts/multiple-radar-chart/multiple-radar-chart.component';
import { PolygonRadarChartComponent } from './components/charts/apexcharts/polygon-radar-chart/polygon-radar-chart.component';
import { BasicPolarChartComponent } from './components/charts/apexcharts/basic-polar-chart/basic-polar-chart.component';
import { MonochromePolarChartComponent } from './components/charts/apexcharts/monochrome-polar-chart/monochrome-polar-chart.component';
import { AnalyticsComponent } from './components/dashboard/analytics/analytics.component';
import { VisitorsAgeComponent } from './components/dashboard/analytics/visitors-age/visitors-age.component';
import { TotalTransactionsComponent } from './components/dashboard/analytics/total-transactions/total-transactions.component';
import { TerminalsComponent } from './components/dashboard/analytics/terminals/terminals.component';
import { AnalyticsActivityComponent } from './components/dashboard/analytics/analytics-activity/analytics-activity.component';
import { AnalyticsAudienceOverviewComponent } from './components/dashboard/analytics/analytics-audience-overview/analytics-audience-overview.component';
import { AnalyticsGenderComponent } from './components/dashboard/analytics/analytics-gender/analytics-gender.component';
import { AnalyticsLanguageComponent } from './components/dashboard/analytics/analytics-language/analytics-language.component';
import { AnalyticsStatsComponent } from './components/dashboard/analytics/analytics-stats/analytics-stats.component';
import { AnalyticsStatusComponent } from './components/dashboard/analytics/analytics-status/analytics-status.component';
import { AnalyticsTotalRevenueComponent } from './components/dashboard/analytics/analytics-total-revenue/analytics-total-revenue.component';
import { BrowserUsedTrafficReportsComponent } from './components/dashboard/analytics/browser-used-traffic-reports/browser-used-traffic-reports.component';
import { NewVsReturingComponent } from './components/dashboard/analytics/new-vs-returing/new-vs-returing.component';
import { RevenueReportComponent } from './components/dashboard/analytics/revenue-report/revenue-report.component';
import { WelcomeDashboardComponent } from './components/dashboard/analytics/welcome-dashboard/welcome-dashboard.component';
import { SessionsDeviceComponent } from './components/dashboard/analytics/sessions-device/sessions-device.component';
import { SessionsByCountriesComponent } from './components/dashboard/analytics/sessions-by-countries/sessions-by-countries.component';
import { SalesAnalyticsComponent } from './components/dashboard/analytics/sales-analytics/sales-analytics.component';

import { ResetPasswordComponent } from './components/authentication/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { SigninSignupComponent } from './components/authentication/signin-signup/signin-signup.component';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { ConfirmMailComponent } from './components/authentication/confirm-mail/confirm-mail.component';
import { LockScreenComponent } from './components/authentication/lock-screen/lock-screen.component';

// UI-KIT
import { ButtonsComponent } from './components/ui-kit/buttons/buttons.component';
import { AlertsComponent } from './components/ui-kit/alerts/alerts.component';
import { AvatarsComponent } from './components/ui-kit/avatars/avatars.component';
import { BadgesComponent } from './components/ui-kit/badges/badges.component';
import { CardsComponent } from './components/ui-kit/cards/cards.component';

import { MenusComponent } from './components/ui-kit/menus/menus.component';
import { GridComponent } from './components/ui-kit/grid/grid.component';
import { ImagesComponent } from './components/ui-kit/images/images.component';
import { ListComponent } from './components/ui-kit/list/list.component';
import { AutocompleteComponent } from './components/ui-kit/autocomplete/autocomplete.component';
import { DsAutocompleteComponent } from './components/ui-kit/autocomplete/ds-autocomplete/ds-autocomplete.component';
import { FilterAutocompleteComponent } from './components/ui-kit/autocomplete/filter-autocomplete/filter-autocomplete.component';
import { OgAutocompleteComponent } from './components/ui-kit/autocomplete/og-autocomplete/og-autocomplete.component';
import { AutocompleteOverviewComponent } from './components/ui-kit/autocomplete/autocomplete-overview/autocomplete-overview.component';
import { PiAutocompleteComponent } from './components/ui-kit/autocomplete/pi-autocomplete/pi-autocomplete.component';
import { SimpleAutocompleteComponent } from './components/ui-kit/autocomplete/simple-autocomplete/simple-autocomplete.component';
import { CheckboxComponent } from './components/ui-kit/checkbox/checkbox.component';
import { RadioComponent } from './components/ui-kit/radio/radio.component';
import { ButtonToggleComponent } from './components/ui-kit/button-toggle/button-toggle.component';
import { ChipsComponent } from './components/ui-kit/chips/chips.component';
import { ChipsAutocompleteComponent } from './components/ui-kit/chips/chips-autocomplete/chips-autocomplete.component';
import { ChipsDadComponent } from './components/ui-kit/chips/chips-dad/chips-dad.component';
import { ChipsWithFcComponent } from './components/ui-kit/chips/chips-with-fc/chips-with-fc.component';
import { ChipsWithInputComponent } from './components/ui-kit/chips/chips-with-input/chips-with-input.component';
import { StackedChipsComponent } from './components/ui-kit/chips/stacked-chips/stacked-chips.component';
import { DatepickerComponent } from './components/ui-kit/datepicker/datepicker.component';
import { DatepickerSvComponent } from './components/ui-kit/datepicker/datepicker-sv/datepicker-sv.component';
import { DatepickerYmPickerComponent } from './components/ui-kit/datepicker/datepicker-ym-picker/datepicker-ym-picker.component';
import { DateRangePcrComponent } from './components/ui-kit/datepicker/date-range-pcr/date-range-pcr.component';
import { DateRangePfiComponent } from './components/ui-kit/datepicker/date-range-pfi/date-range-pfi.component';
import { BasicDateRangeComponent } from './components/ui-kit/datepicker/basic-date-range/basic-date-range.component';
import { DpActionButtonComponent } from './components/ui-kit/datepicker/dp-action-button/dp-action-button.component';
import { DpOpenMethodComponent } from './components/ui-kit/datepicker/dp-open-method/dp-open-method.component';
import { DatepickerPcComponent } from './components/ui-kit/datepicker/datepicker-pc/datepicker-pc.component';
import { DatepickerCustomIconComponent } from './components/ui-kit/datepicker/datepicker-custom-icon/datepicker-custom-icon.component';
import { DisabledDatepickerComponent } from './components/ui-kit/datepicker/disabled-datepicker/disabled-datepicker.component';
import { DatepickerInlineCalendarComponent } from './components/ui-kit/datepicker/datepicker-inline-calendar/datepicker-inline-calendar.component';
import { DividerComponent } from './components/ui-kit/divider/divider.component';
import { ExpansionComponent } from './components/ui-kit/expansion/expansion.component';
import { AccordionTogglesComponent } from './components/ui-kit/expansion/accordion-toggles/accordion-toggles.component';
import { FormFieldComponent } from './components/ui-kit/form-field/form-field.component';
import { FfWithLabelComponent } from './components/ui-kit/form-field/ff-with-label/ff-with-label.component';
import { InputComponent } from './components/ui-kit/input/input.component';
import { PaginationComponent } from './components/ui-kit/pagination/pagination.component';
import { ProgressBarComponent } from './components/ui-kit/progress-bar/progress-bar.component';
import { SelectComponent } from './components/ui-kit/select/select.component';
import { SidenavComponent } from './components/ui-kit/sidenav/sidenav.component';
import { DrawerEbsComponent } from './components/ui-kit/sidenav/drawer-ebs/drawer-ebs.component';
import { SlideToggleComponent } from './components/ui-kit/slide-toggle/slide-toggle.component';
import { SliderComponent } from './components/ui-kit/slider/slider.component';
import { SnackbarComponent } from './components/ui-kit/snackbar/snackbar.component';
import { SnackbarWithCcComponent } from './components/ui-kit/snackbar/snackbar-with-cc/snackbar-with-cc.component';
import { SnackbarWithCpComponent } from './components/ui-kit/snackbar/snackbar-with-cp/snackbar-with-cp.component';
import { ToolbarComponent } from './components/ui-kit/toolbar/toolbar.component';
import { TooltipComponent } from './components/ui-kit/tooltip/tooltip.component';
import { TooltipShowHideDelayComponent } from './components/ui-kit/tooltip/tooltip-show-hide-delay/tooltip-show-hide-delay.component';
import { TreeComponent } from './components/ui-kit/tree/tree.component';
import { TreeWithPldComponent } from './components/ui-kit/tree/tree-with-pld/tree-with-pld.component';
import { TreeWithDdComponent } from './components/ui-kit/tree/tree-with-dd/tree-with-dd.component';
import { TreeWithCheckboxComponent } from './components/ui-kit/tree/tree-with-checkbox/tree-with-checkbox.component';
import { TabsComponent } from './components/ui-kit/tabs/tabs.component';
import { StepperComponent } from './components/ui-kit/stepper/stepper.component';
import { StepperResponsiveComponent } from './components/ui-kit/stepper/stepper-responsive/stepper-responsive.component';
import { AccordionComponent } from './components/ui-kit/accordion/accordion.component';
import { ListboxComponent } from './components/ui-kit/listbox/listbox.component';
import { BreadcrumbComponent } from './components/ui-kit/breadcrumb/breadcrumb.component';
import { TableComponent } from './components/ui-kit/table/table.component';
import { DialogComponent } from './components/ui-kit/dialog/dialog.component';
import { TypographyComponent } from './components/ui-kit/typography/typography.component';
import { SpacingComponent } from './components/ui-kit/spacing/spacing.component';
import { DragDropComponent } from './components/ui-kit/drag-drop/drag-drop.component';
import { ConnectedSortingDdComponent } from './components/ui-kit/drag-drop/connected-sorting-dd/connected-sorting-dd.component';
import { AddRemoveArrayBasedDatasourceTableComponent } from './components/ui-kit/table/add-remove-array-based-datasource-table/add-remove-array-based-datasource-table.component';
import { TableDynamicallyColumnsDisplayedComponent } from './components/ui-kit/table/table-dynamically-columns-displayed/table-dynamically-columns-displayed.component';
import { StylingColumnsTableComponent } from './components/ui-kit/table/styling-columns-table/styling-columns-table.component';
import { AddRemoveObservableBasedDatasourceTableComponent } from './components/ui-kit/table/add-remove-observable-based-datasource-table/add-remove-observable-based-datasource-table.component';
import { ExpandableRowsTableComponent } from './components/ui-kit/table/expandable-rows-table/expandable-rows-table.component';
import { FilteringTableComponent } from './components/ui-kit/table/filtering-table/filtering-table.component';
import { FooterRowTableComponent } from './components/ui-kit/table/footer-row-table/footer-row-table.component';
import { RetrievingDataHttpTableComponent } from './components/ui-kit/table/retrieving-data-http-table/retrieving-data-http-table.component';
import { MultipleHeaderFooterTableComponent } from './components/ui-kit/table/multiple-header-footer-table/multiple-header-footer-table.component';
import { SortingPaginationFilteringTableComponent } from './components/ui-kit/table/sorting-pagination-filtering-table/sorting-pagination-filtering-table.component';
import { PaginationTableComponent } from './components/ui-kit/table/pagination-table/pagination-table.component';
import { SelectionTableComponent } from './components/ui-kit/table/selection-table/selection-table.component';
import { SortingTableComponent } from './components/ui-kit/table/sorting-table/sorting-table.component';
import { StickyColumnsTableComponent } from './components/ui-kit/table/sticky-columns-table/sticky-columns-table.component';
import { StickyFooterTableComponent } from './components/ui-kit/table/sticky-footer-table/sticky-footer-table.component';
import { StickyHeaderTableComponent } from './components/ui-kit/table/sticky-header-table/sticky-header-table.component';
import { RippleTableComponent } from './components/ui-kit/table/ripple-table/ripple-table.component';
import { MenuDialogComponent } from './components/ui-kit/dialog/menu-dialog/menu-dialog.component';
import { FormDialogComponent } from './components/ui-kit/dialog/form-dialog/form-dialog.component';
import { BigFormDialogComponent } from './components/ui-kit/dialog/big-form-dialog/big-form-dialog.component';
import { VideosComponent } from './components/ui-kit/videos/videos.component';
import { YoutubePopupComponent } from './components/ui-kit/videos/youtube-popup/youtube-popup.component';
import { VimeoPopupComponent } from './components/ui-kit/videos/vimeo-popup/vimeo-popup.component';

import { FlaticonComponent } from './components/pages/icons/flaticon/flaticon.component';
import { RemixiconComponent } from './components/pages/icons/remixicon/remixicon.component';
import { MaterialSymbolsComponent } from './components/pages/icons/material-symbols/material-symbols.component';
import { MaterialIconsComponent } from './components/pages/icons/material-icons/material-icons.component';

import { BasicTableComponent } from './components/tables/basic-table/basic-table.component';
import { DataTableComponent } from './components/tables/data-table/data-table.component';
import { DtTeamMembersComponent } from './components/tables/data-table/dt-team-members/dt-team-members.component';
import { DtTasksComponent } from './components/tables/data-table/dt-tasks/dt-tasks.component';
import {
  LmsEnrolledComponent
} from './components/tables/data-table/lms-enrolled-created/lms-enrolled/lms-enrolled.component';
import {
  LmsEnrolledCreatedComponent
} from './components/tables/data-table/lms-enrolled-created/lms-enrolled-created.component';
import {
  LmsCreatedComponent
} from './components/tables/data-table/lms-enrolled-created/lms-created/lms-created.component';
import { ChartjsComponent } from './components/charts/chartjs/chartjs.component';
import { ScatterChartjsComponent } from './components/charts/chartjs/scatter-chartjs/scatter-chartjs.component';
import { RadarChartjsComponent } from './components/charts/chartjs/radar-chartjs/radar-chartjs.component';
import { PolarChartjsComponent } from './components/charts/chartjs/polar-chartjs/polar-chartjs.component';
import { PieChartjsComponent } from './components/charts/chartjs/pie-chartjs/pie-chartjs.component';
import { DoughnutChartjsComponent } from './components/charts/chartjs/doughnut-chartjs/doughnut-chartjs.component';
import { BubbleChartjsComponent } from './components/charts/chartjs/bubble-chartjs/bubble-chartjs.component';
import { BarChartjsComponent } from './components/charts/chartjs/bar-chartjs/bar-chartjs.component';
import { EchartsComponent } from './components/charts/echarts/echarts.component';
import { ThemeEchartComponent } from './components/charts/echarts/theme-echart/theme-echart.component';
import { SimpleEchartComponent } from './components/charts/echarts/simple-echart/simple-echart.component';
import { MergeEchartComponent } from './components/charts/echarts/merge-echart/merge-echart.component';
import { LoadingEchartComponent } from './components/charts/echarts/loading-echart/loading-echart.component';
import { InstanceEchartComponent } from './components/charts/echarts/instance-echart/instance-echart.component';
import { InitOptsEchartComponent } from './components/charts/echarts/init-opts-echart/init-opts-echart.component';
import { EventsEchartComponent } from './components/charts/echarts/events-echart/events-echart.component';
import { GaugeComponent } from './components/charts/gauge/gauge.component';
import { AdvancedFormComponent } from './components/forms/advanced-form/advanced-form.component';
import { BasicFormComponent } from './components/forms/basic-form/basic-form.component';
import { EditorsComponent } from './components/forms/editors/editors.component';
import { FileUploaderComponent } from './components/forms/file-uploader/file-uploader.component';
import { WizardFormComponent } from './components/forms/wizard-form/wizard-form.component';
import { AccountComponent } from './components/pages/account/account.component';
import { ConnectionsComponent } from './components/pages/connections/connections.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { SecurityComponent } from './components/pages/security/security.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { TasksComponent } from './components/pages/profile/tasks/tasks.component';
import { StatsComponent } from './components/pages/profile/stats/stats.component';
import { PersonalInfoComponent } from './components/pages/profile/personal-info/personal-info.component';
import { OverviewComponent } from './components/pages/profile/overview/overview.component';
import { ActivityTimelineComponent } from './components/pages/profile/activity-timeline/activity-timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,

    ApexchartsComponent,
    DashedLineChartComponent,
    GradientLineChartComponent,
    ZoomableLineChartComponent,
    BasicLineChartComponent,
    SteplineLineChartComponent,
    BrushLineChartComponent,
    SyncingLineChartComponent,
    BasicAreaChartComponent,
    SplineAreaChartComponent,
    DatetimeAreaChartComponent,
    NegativeAreaChartComponent,
    StackedAreaChartComponent,
    MissingAreaChartComponent,
    GithubAreaChartComponent,
    BasicColumnChartComponent,
    DatalabelsColumnChartComponent,
    StackedColumnChartComponent,
    RangeColumnChartComponent,
    RotatedLabelsColumnChartComponent,
    DistributedColumnChartComponent,
    LineColumnChartComponent,
    MultipleYaxisChartComponent,
    LineAreaChartComponent,
    LineColumnAreaChartComponent,
    BasicRangeAreaChartComponent,
    BasicTimelineChartComponent,
    BasicCandlestickChartComponent,
    BasicBoxplotChartComponent,
    BasicBubbleChartComponent,
    BasicScatterChartComponent,
    BasicHeatmapChartComponent,
    BasicTreemapChartComponent,
    BasicPieChartComponent,
    PieDonutChartComponent,
    PieMonochromeChartComponent,
    BasicRadialbarChartComponent,
    MultipleRadialbarChartComponent,
    CircleRadialbarChartComponent,
    GradientRadialbarChartComponent,
    StrokedRadialbarChartComponent,
    CircularRadialbarChartComponent,
    BasicRadarChartComponent,
    MultipleRadarChartComponent,
    PolygonRadarChartComponent,
    BasicPolarChartComponent,
    MonochromePolarChartComponent,
    AnalyticsComponent,
    VisitorsAgeComponent,
    TotalTransactionsComponent,
    TerminalsComponent,
    AnalyticsActivityComponent,
    AnalyticsAudienceOverviewComponent,
    AnalyticsGenderComponent,
    AnalyticsLanguageComponent,
    AnalyticsStatsComponent,
    AnalyticsStatusComponent,
    AnalyticsTotalRevenueComponent,
    BrowserUsedTrafficReportsComponent,
    NewVsReturingComponent,
    RevenueReportComponent,
    WelcomeDashboardComponent,
    SessionsDeviceComponent,
    SessionsByCountriesComponent,
    SalesAnalyticsComponent,

    // UI-KIT
    AccordionComponent,
    AlertsComponent,
    AutocompleteComponent,
    AvatarsComponent,
    BadgesComponent,
    BreadcrumbComponent,
    ButtonToggleComponent,
    ButtonsComponent,
    CardsComponent,
    CheckboxComponent,
    ChipsComponent,
    DatepickerComponent,
    DialogComponent,
    DividerComponent,
    DragDropComponent,
    ExpansionComponent,
    FormFieldComponent,
    GridComponent,
    ImagesComponent,
    InputComponent,
    ListComponent,
    ListboxComponent,
    MenusComponent,
    PaginationComponent,
    ProgressBarComponent,
    RadioComponent,
    SelectComponent,
    SidenavComponent,
    SlideToggleComponent,
    SliderComponent,
    SnackbarComponent,
    SnackbarWithCpComponent,
    SpacingComponent,
    StepperComponent,
    TableComponent,
    TabsComponent,
    ToolbarComponent,
    TooltipComponent,
    TreeComponent,
    TypographyComponent,
    VideosComponent,
    DsAutocompleteComponent,
    FilterAutocompleteComponent,
    OgAutocompleteComponent,
    AutocompleteOverviewComponent,
    PiAutocompleteComponent,
    SimpleAutocompleteComponent,
    ChipsAutocompleteComponent,
    ChipsDadComponent,
    ChipsWithFcComponent,
    ChipsWithInputComponent,
    StackedChipsComponent,
    DatepickerSvComponent,
    DatepickerYmPickerComponent,
    DateRangePcrComponent,
    DateRangePfiComponent,
    BasicDateRangeComponent,
    DpActionButtonComponent,
    DpOpenMethodComponent,
    DatepickerPcComponent,
    DatepickerCustomIconComponent,
    DisabledDatepickerComponent,
    DatepickerInlineCalendarComponent,
    AccordionTogglesComponent,
    FfWithLabelComponent,
    DrawerEbsComponent,
    SnackbarWithCcComponent,
    TooltipShowHideDelayComponent,
    TreeWithPldComponent,
    TreeWithDdComponent,
    TreeWithCheckboxComponent,
    StepperResponsiveComponent,
    ConnectedSortingDdComponent,
    AddRemoveArrayBasedDatasourceTableComponent,
    TableDynamicallyColumnsDisplayedComponent,
    StylingColumnsTableComponent,
    AddRemoveObservableBasedDatasourceTableComponent,
    ExpandableRowsTableComponent,
    FilteringTableComponent,
    FooterRowTableComponent,
    RetrievingDataHttpTableComponent,
    MultipleHeaderFooterTableComponent,
    SortingPaginationFilteringTableComponent,
    PaginationTableComponent,
    SelectionTableComponent,
    SortingTableComponent,
    StickyColumnsTableComponent,
    StickyFooterTableComponent,
    StickyHeaderTableComponent,
    RippleTableComponent,
    MenuDialogComponent,
    FormDialogComponent,
    BigFormDialogComponent,
    YoutubePopupComponent,
    VimeoPopupComponent,

    FlaticonComponent,
    RemixiconComponent,
    MaterialSymbolsComponent,
    MaterialIconsComponent,

    BasicTableComponent,
    DataTableComponent,
    DtTeamMembersComponent,
    DtTasksComponent,
    LmsCreatedComponent,
    LmsEnrolledComponent,
    LmsEnrolledCreatedComponent,

    ChartjsComponent,
    ScatterChartjsComponent,
    RadarChartjsComponent,
    PolarChartjsComponent,
    PieChartjsComponent,
    DoughnutChartjsComponent,
    BubbleChartjsComponent,
    BarChartjsComponent,


    EchartsComponent,
    ThemeEchartComponent,
    SimpleEchartComponent,
    MergeEchartComponent,
    LoadingEchartComponent,
    InstanceEchartComponent,
    InitOptsEchartComponent,
    EventsEchartComponent,

    GaugeComponent,

    AdvancedFormComponent,
    BasicFormComponent,
    EditorsComponent,
    FileUploaderComponent,
    WizardFormComponent,

    ResetPasswordComponent,
    ForgotPasswordComponent,
    LoginComponent,
    RegisterComponent,
    SigninSignupComponent,
    LogoutComponent,
    ConfirmMailComponent,
    LockScreenComponent,

    AccountComponent,
    ConnectionsComponent,
    FaqComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    SecurityComponent,
    ProfileComponent,
    TasksComponent,
    StatsComponent,
    PersonalInfoComponent,
    OverviewComponent,
    ActivityTimelineComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    BrowserModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,

    // material
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatButtonModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,

    DragDropModule,
    CdkAccordionModule,

    NgScrollbarModule,

    NgApexchartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    NgxGaugeModule,
    NgChartsModule,

    NgxEditorModule,
    QuillModule.forRoot(),
    NgxDropzoneModule,
    NgxMatTimepickerModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
