import { Component, NgZone } from '@angular/core';
import { CatService } from 'src/app/cat.service';

@Component({
  selector: 'app-list-cats-component',
  templateUrl: './list-cats-component.component.html',
  styleUrls: ['./list-cats-component.component.css']
})
export class ListCatsComponentComponent {

  constructor(
    private catService: CatService    
  ){}

  listCats: any = []

  ngOnInit(){
    this.loadCats()
  }

  loadCats(){
    this.catService.getCats().subscribe((data: {}) =>{
      this.listCats = data
    })
  }

}
