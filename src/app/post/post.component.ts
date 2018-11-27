import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() loveIts;

  creationDate = new Date();

  constructor() { }

  ngOnInit() {
  }
/**
 * Récupéraion des valeurs de loveIts
 */
  getLoveIts() {
    return this.loveIts
  }
/**
 * ajoute 1 à loveIts lors au click sur le bouton correspondant
 */
  onLike() {
    this.loveIts++;
    return this.loveIts;
  }
/**
 * retire 1 à LoveIts au click sur le bouton correspondant
 */
  onDislike() {
    this.loveIts--;
    return this.loveIts;
  }

}
