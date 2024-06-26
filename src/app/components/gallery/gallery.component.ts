import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  photos = [
    { url: 'assets/photo1.jpg', description: 'Descrição da foto 1' },
    { url: 'assets/photo2.jpg', description: 'Descrição da foto 2' },
    // remover fotos do projeto e hospedá-las utilizando seu link
  ];

  constructor() {}

  ngOnInit(): void {}
}