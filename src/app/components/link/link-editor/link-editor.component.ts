import { Component, OnInit, Input } from '@angular/core';
import { LinksService } from '../link.service';
import { Links } from '../link';
import { Star } from '../../star/star';
import { StarService } from '../../star/star.service';

@Component({
  selector: 'app-link-editor',
  templateUrl: './link-editor.component.html',
  styleUrls: ['./link-editor.component.css']
})
export class LinkEditorComponent implements OnInit {

  public link: Links;
  public star: Star;
  @Input() starMovieId: number;

  constructor(private linkService: LinksService, private starService: StarService) {
    this.link = new Links();
    this.star = new Star();
  }

  createNewLink = (id: number) => {
    this.link = new Links();
  }

  createLink = (id: number) => {
    
    this.linkService.createLink(id, this.link, (success) => {
      this.link = <Links>success;
    });
  }

  ngOnInit() {
  }

}
