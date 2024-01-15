import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { HomeNewsComponent } from './app/home-page/home-news/home-news.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { HeaderComponent } from './app/header/header.component';
import { HeaderNavbarWrapperComponent } from './app/header-nav-wrapper/header-navbar-wrapper.component';
import { RootModule } from '../../app/root.module';
import { NavbarModule } from '../../app/navbar/navbar.module';
import { SharedBrowseByModule } from '../../app/shared/browse-by/shared-browse-by.module';
import { ResultsBackButtonModule } from '../../app/shared/results-back-button/results-back-button.module';
//
// Ibss special
import { FooterComponent } from './app/footer/footer.component';
import { PrivacyComponent } from './app/info/privacy/privacy.component';
import { PrivacyContentComponent } from './app/info/privacy/privacy-content/privacy-content.component';
import { EndUserAgreementComponent } from './app/info/end-user-agreement/end-user-agreement.component';
import { EndUserAgreementContentComponent } from './app/info/end-user-agreement/end-user-agreement-content/end-user-agreement-content.component';
// import { CommunityPageComponent } from './app/community-page/community-page.component';
// import { CollectionPageComponent } from './app/collection-page/collection-page.component';
import { StartsWithTextComponent } from './app/shared/starts-with/text/starts-with-text.component';


/**
 * Add components that use a custom decorator to ENTRY_COMPONENTS as well as DECLARATIONS.
 * This will ensure that decorator gets picked up when the app loads
 */
const ENTRY_COMPONENTS = [];

const DECLARATIONS = [
  ...ENTRY_COMPONENTS,
  HomeNewsComponent,
  HeaderComponent,
  HeaderNavbarWrapperComponent,
  NavbarComponent,
  FooterComponent,
  PrivacyComponent,
  EndUserAgreementComponent,
  EndUserAgreementContentComponent,
  PrivacyContentComponent,
  StartsWithTextComponent,
  // CommunityPageComponent,
  // CollectionPageComponent,
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SharedBrowseByModule,
    ResultsBackButtonModule,
    RootModule,
    NavbarModule,
  ],
  declarations: DECLARATIONS,
  providers: [
    ...ENTRY_COMPONENTS.map((component) => ({provide: component}))
  ],
})
/**
 * This module is included in the main bundle that gets downloaded at first page load. So it should
 * contain only the themed components that have to be available immediately for the first page load,
 * and the minimal set of imports required to make them work. Anything you can cut from it will make
 * the initial page load faster, but may cause the page to flicker as components that were already
 * rendered server side need to be lazy-loaded again client side
 *
 * Themed EntryComponents should also be added here
 */
export class EagerThemeModule {
}
