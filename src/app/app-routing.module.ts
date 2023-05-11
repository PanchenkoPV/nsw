import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalyticsComponent } from './components/dashboard/analytics/analytics.component';
import { ButtonsComponent } from './components/ui-kit/buttons/buttons.component';
import { AlertsComponent } from './components/ui-kit/alerts/alerts.component';
import { AvatarsComponent } from './components/ui-kit/avatars/avatars.component';
import { MenusComponent } from './components/ui-kit/menus/menus.component';
import { GridComponent } from './components/ui-kit/grid/grid.component';
import { AutocompleteComponent } from './components/ui-kit/autocomplete/autocomplete.component';
import { ListComponent } from './components/ui-kit/list/list.component';
import { CheckboxComponent } from './components/ui-kit/checkbox/checkbox.component';
import { DatepickerComponent } from './components/ui-kit/datepicker/datepicker.component';
import { DividerComponent } from './components/ui-kit/divider/divider.component';
import { ExpansionComponent } from './components/ui-kit/expansion/expansion.component';
import { ProgressBarComponent } from './components/ui-kit/progress-bar/progress-bar.component';
import { VideosComponent } from './components/ui-kit/videos/videos.component';
import { SpacingComponent } from './components/ui-kit/spacing/spacing.component';
import { TypographyComponent } from './components/ui-kit/typography/typography.component';
import { DialogComponent } from './components/ui-kit/dialog/dialog.component';
import { DragDropComponent } from './components/ui-kit/drag-drop/drag-drop.component';
import { TableComponent } from './components/ui-kit/table/table.component';
import { BreadcrumbComponent } from './components/ui-kit/breadcrumb/breadcrumb.component';
import { ListboxComponent } from './components/ui-kit/listbox/listbox.component';
import { AccordionComponent } from './components/ui-kit/accordion/accordion.component';
import { StepperComponent } from './components/ui-kit/stepper/stepper.component';
import { TabsComponent } from './components/ui-kit/tabs/tabs.component';
import { TreeComponent } from './components/ui-kit/tree/tree.component';
import { TooltipComponent } from './components/ui-kit/tooltip/tooltip.component';
import { ToolbarComponent } from './components/ui-kit/toolbar/toolbar.component';
import { SnackbarComponent } from './components/ui-kit/snackbar/snackbar.component';
import { SliderComponent } from './components/ui-kit/slider/slider.component';
import { SlideToggleComponent } from './components/ui-kit/slide-toggle/slide-toggle.component';
import { SidenavComponent } from './components/ui-kit/sidenav/sidenav.component';
import { SelectComponent } from './components/ui-kit/select/select.component';
import { PaginationComponent } from './components/ui-kit/pagination/pagination.component';
import { InputComponent } from './components/ui-kit/input/input.component';
import { FormFieldComponent } from './components/ui-kit/form-field/form-field.component';
import { ChipsComponent } from './components/ui-kit/chips/chips.component';
import { ButtonToggleComponent } from './components/ui-kit/button-toggle/button-toggle.component';
import { RadioComponent } from './components/ui-kit/radio/radio.component';
import { ImagesComponent } from './components/ui-kit/images/images.component';
import { CardsComponent } from './components/ui-kit/cards/cards.component';
import { BadgesComponent } from './components/ui-kit/badges/badges.component';
import { MaterialIconsComponent } from './components/pages/icons/material-icons/material-icons.component';
import { MaterialSymbolsComponent } from './components/pages/icons/material-symbols/material-symbols.component';
import { RemixiconComponent } from './components/pages/icons/remixicon/remixicon.component';
import { FlaticonComponent } from './components/pages/icons/flaticon/flaticon.component';
import { DataTableComponent } from './components/tables/data-table/data-table.component';
import { BasicTableComponent } from './components/tables/basic-table/basic-table.component';
import { GaugeComponent } from './components/charts/gauge/gauge.component';
import { ChartjsComponent } from './components/charts/chartjs/chartjs.component';
import { EchartsComponent } from './components/charts/echarts/echarts.component';
import { ApexchartsComponent } from './components/charts/apexcharts/apexcharts.component';
import { FileUploaderComponent } from './components/forms/file-uploader/file-uploader.component';
import { EditorsComponent } from './components/forms/editors/editors.component';
import { AdvancedFormComponent } from './components/forms/advanced-form/advanced-form.component';
import { WizardFormComponent } from './components/forms/wizard-form/wizard-form.component';
import { BasicFormComponent } from './components/forms/basic-form/basic-form.component';
import { LockScreenComponent } from './components/authentication/lock-screen/lock-screen.component';
import { ConfirmMailComponent } from './components/authentication/confirm-mail/confirm-mail.component';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { SigninSignupComponent } from './components/authentication/signin-signup/signin-signup.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { ResetPasswordComponent } from './components/authentication/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ConnectionsComponent } from './components/pages/connections/connections.component';
import { SecurityComponent } from './components/pages/security/security.component';
import { AccountComponent } from './components/pages/account/account.component';
import { ProfileComponent } from './components/pages/profile/profile.component';

const routes: Routes = [
  { path: '', component: AnalyticsComponent },
  {path: 'ui-kit/buttons', component: ButtonsComponent},
  {path: 'ui-kit/alerts', component: AlertsComponent},
  {path: 'ui-kit/avatars', component: AvatarsComponent},
  {path: 'ui-kit/badges', component: BadgesComponent},
  {path: 'ui-kit/cards', component: CardsComponent},
  {path: 'ui-kit/menus', component: MenusComponent},
  {path: 'ui-kit/grid', component: GridComponent},
  {path: 'ui-kit/images', component: ImagesComponent},
  {path: 'ui-kit/list', component: ListComponent},
  {path: 'ui-kit/autocomplete', component: AutocompleteComponent},
  {path: 'ui-kit/checkbox', component: CheckboxComponent},
  {path: 'ui-kit/radio', component: RadioComponent},
  {path: 'ui-kit/button-toggle', component: ButtonToggleComponent},
  {path: 'ui-kit/chips', component: ChipsComponent},
  {path: 'ui-kit/datepicker', component: DatepickerComponent},
  {path: 'ui-kit/divider', component: DividerComponent},
  {path: 'ui-kit/expansion', component: ExpansionComponent},
  {path: 'ui-kit/form-field', component: FormFieldComponent},
  {path: 'ui-kit/input', component: InputComponent},
  {path: 'ui-kit/pagination', component: PaginationComponent},
  {path: 'ui-kit/progress-bar', component: ProgressBarComponent},
  {path: 'ui-kit/select', component: SelectComponent},
  {path: 'ui-kit/sidenav', component: SidenavComponent},
  {path: 'ui-kit/slide-toggle', component: SlideToggleComponent},
  {path: 'ui-kit/slider', component: SliderComponent},
  {path: 'ui-kit/snackbar', component: SnackbarComponent},
  {path: 'ui-kit/toolbar', component: ToolbarComponent},
  {path: 'ui-kit/tooltip', component: TooltipComponent},
  {path: 'ui-kit/tree', component: TreeComponent},
  {path: 'ui-kit/tabs', component: TabsComponent},
  {path: 'ui-kit/stepper', component: StepperComponent},
  {path: 'ui-kit/accordion', component: AccordionComponent},
  {path: 'ui-kit/listbox', component: ListboxComponent},
  {path: 'ui-kit/breadcrumb', component: BreadcrumbComponent},
  {path: 'ui-kit/table', component: TableComponent},
  {path: 'ui-kit/drag-drop', component: DragDropComponent},
  {path: 'ui-kit/dialog', component: DialogComponent},
  {path: 'ui-kit/typography', component: TypographyComponent},
  {path: 'ui-kit/spacing', component: SpacingComponent},
  {path: 'ui-kit/videos', component: VideosComponent},

  {path: 'icons/flaticon', component: FlaticonComponent},
  {path: 'icons/remixicon', component: RemixiconComponent},
  {path: 'icons/material-symbols', component: MaterialSymbolsComponent},
  {path: 'icons/material', component: MaterialIconsComponent},

  {path: 'tables/basic', component: BasicTableComponent},
  {path: 'tables/data', component: DataTableComponent},

  {path: 'charts/apexcharts', component: ApexchartsComponent},
  {path: 'charts/echarts', component: EchartsComponent},
  {path: 'charts/chartjs', component: ChartjsComponent},
  {path: 'charts/gauge', component: GaugeComponent},

  {path: 'forms/basic', component: BasicFormComponent},
  {path: 'forms/wizard', component: WizardFormComponent},
  {path: 'forms/advanced', component: AdvancedFormComponent},
  {path: 'forms/editors', component: EditorsComponent},
  {path: 'forms/file-uploader', component: FileUploaderComponent},

  {path: 'authentication/forgot-password', component: ForgotPasswordComponent},
  {path: 'authentication/reset-password', component: ResetPasswordComponent},
  {path: 'authentication/login', component: LoginComponent},
  {path: 'authentication/register', component: RegisterComponent},
  {path: 'authentication/signin-signup', component: SigninSignupComponent},
  {path: 'authentication/logout', component: LogoutComponent},
  {path: 'authentication/confirm-mail', component: ConfirmMailComponent},
  {path: 'authentication/lock-screen', component: LockScreenComponent},

  {path: 'profile', component: ProfileComponent},
  {path: 'account', component: AccountComponent},
  {path: 'security', component: SecurityComponent},
  {path: 'connections', component: ConnectionsComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'terms-conditions', component: TermsConditionsComponent},
  {path: 'faq', component: FaqComponent},
  // { path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  // { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
