import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { StarModule } from './star/star.module';
import { CountryModule } from './country/country.module';
import { MainModule } from './main/main.module';
import { NavbarModule } from './navbar/navbar.module';
import { LinkModule } from './link/link.module';
import { GalleryModule } from './gallery/gallery.module';
import { AvatarModule } from './avatar/avatar.module';
import { ProfessionModule } from './profession/profession.module';
import { SignUpModule } from "./navbar/signup/signup.module";
import { MovieModule } from './movie/movie.module';
import { PosterModule } from './poster/poster.module';
import { TrailerModule } from './trailer/trailer.module';
import { CrewModule } from './crew/crew.module';
import { CastModule } from './cast/cast.module';
import { LoginModule } from "./navbar/login/login.module";
import { ForgotModule } from "./navbar/forgot/forgot.module";
import { StarUserModule } from './starUser/star-user.module';
import { Star } from './star/star';



@NgModule({
  exports: [
    StarModule,
    MainModule,
    NavbarModule,
    CountryModule,
    LinkModule,
    GalleryModule,
    AvatarModule,
    ProfessionModule,
    SignUpModule,
    MovieModule,
    PosterModule,
    TrailerModule,
    CrewModule,
    CastModule,
    LoginModule,
    ForgotModule,
    StarUserModule

  ],
  imports: [
    HttpClientModule,
    CommonModule,
    StarModule,
    MainModule,
    NavbarModule,
    CountryModule,
    LinkModule,
    GalleryModule,
    AvatarModule,
    ProfessionModule,
    SignUpModule,
    MovieModule,
    PosterModule,
    TrailerModule,
    CrewModule,
    CastModule,
    LoginModule,
    ForgotModule,
    StarUserModule
  ],
  declarations: []
})

export class ComponentsModule {
}
