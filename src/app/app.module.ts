import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { CastComponent } from './components/cast/cast.component';
import { MovieComponent } from './components/movie/movie.component';
import { StarComponent } from './components/star/star.component';
import { MoviemarkComponent } from './components/moviemark/moviemark.component';
import { CommentComponent } from './components/comment/comment.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GenreComponent } from './components/genre/genre.component';
import { ImageComponent } from './components/image/image.component';
import { LikeComponent } from './components/like/like.component';
import { LinksComponent } from './components/links/links.component';
import { PosterComponent } from './components/poster/poster.component';
import { ProfessionComponent } from './components/profession/profession.component';
import { TrailerComponent } from './components/trailer/trailer.component';
import { UserComponent } from './components/user/user.component';
import { CastEditComponent } from './components/cast/cast-edit/cast-edit.component';
import { CastViewComponent } from './components/cast/cast-view/cast-view.component';
import { CommentEditComponent } from './components/comment/comment-edit/comment-edit.component';
import { CommentViewComponent } from './components/comment/comment-view/comment-view.component';
import { CommentSelectorComponent } from './components/comment/comment-selector/comment-selector.component';
import { CountryEditComponent } from './components/country/country-edit/country-edit.component';
import { CountrySelectorComponent } from './components/country/country-selector/country-selector.component';
import { CountryViewComponent } from './components/country/country-view/country-view.component';
import { GalleryEditComponent } from './components/gallery/gallery-edit/gallery-edit.component';
import { GalleryViewComponent } from './components/gallery/gallery-view/gallery-view.component';
import { GenreSelectorComponent } from './components/genre/genre-selector/genre-selector.component';
import { GenreEditComponent } from './components/genre/genre-edit/genre-edit.component';
import { GenreViewComponent } from './components/genre/genre-view/genre-view.component';
import { ImageViewComponent } from './components/image/image-view/image-view.component';
import { ImageEditComponent } from './components/image/image-edit/image-edit.component';
import { LikeEditComponent } from './components/like/like-edit/like-edit.component';
import { LikeViewComponent } from './components/like/like-view/like-view.component';
import { LinksEditComponent } from './components/links/links-edit/links-edit.component';
import { LinksViewComponent } from './components/links/links-view/links-view.component';
import { MovieViewComponent } from './components/movie/movie-view/movie-view.component';
import { MovieEditComponent } from './components/movie/movie-edit/movie-edit.component';
import { MoviemarkEditComponent } from './components/moviemark/moviemark-edit/moviemark-edit.component';
import { MoviemarkViewComponent } from './components/moviemark/moviemark-view/moviemark-view.component';
import { PosterViewComponent } from './components/poster/poster-view/poster-view.component';
import { PosterEditComponent } from './components/poster/poster-edit/poster-edit.component';
import { ProfessionViewComponent } from './components/profession/profession-view/profession-view.component';
import { ProfessionEditComponent } from './components/profession/profession-edit/profession-edit.component';
import { StarEditComponent } from './components/star/star-edit/star-edit.component';
import { StarViewComponent } from './components/star/star-view/star-view.component';
import { TrailerViewComponent } from './components/trailer/trailer-view/trailer-view.component';
import { TrailerEditComponent } from './components/trailer/trailer-edit/trailer-edit.component';
import { UserViewComponent } from './components/user/user-view/user-view.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { CustomComponentModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    CastComponent,
    MovieComponent,
    StarComponent,
    MoviemarkComponent,
    CommentComponent,
    GalleryComponent,
    GenreComponent,
    ImageComponent,
    LikeComponent,
    LinksComponent,
    PosterComponent,
    ProfessionComponent,
    TrailerComponent,
    UserComponent,
    CastEditComponent,
    CastViewComponent,
    CommentEditComponent,
    CommentViewComponent,
    CommentSelectorComponent,
    CountryEditComponent,
    CountrySelectorComponent,
    CountryViewComponent,
    GalleryEditComponent,
    GalleryViewComponent,
    GenreSelectorComponent,
    GenreEditComponent,
    GenreViewComponent,
    ImageViewComponent,
    ImageEditComponent,
    LikeEditComponent,
    LikeViewComponent,
    LinksEditComponent,
    LinksViewComponent,
    MovieViewComponent,
    MovieEditComponent,
    MoviemarkEditComponent,
    MoviemarkViewComponent,
    PosterViewComponent,
    PosterEditComponent,
    ProfessionViewComponent,
    ProfessionEditComponent,
    StarEditComponent,
    StarViewComponent,
    TrailerViewComponent,
    TrailerEditComponent,
    UserViewComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    CustomComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
