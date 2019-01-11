import { Component, OnInit, Input } from '@angular/core';
import { Gallery } from '../gallery';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery-of-star',
  templateUrl: './gallery-of-star.component.html',
  styleUrls: ['./gallery-of-star.component.css']
})
export class GalleryOfStarComponent implements OnInit {

  public gallery: Gallery;
  @Input() galleryLink: string;

  constructor(private galleryService: GalleryService) {
    this.gallery = new Gallery();
  }

  ngOnInit() {
  }

  showStarsGallery = (link: string) => {
    this.galleryService.showStarsGallery(link, (success) => {
      this.gallery = <Gallery>success;
    });
  }

}
