import { Component, OnInit } from '@angular/core';
import { WikidataService } from 'src/app/shared/wikidata.service';
import { FormBuilder } from '@angular/forms';
import { Wiki } from 'src/app/shared/Wiki';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mend: string = "Moooo"
  wik!: []

  searchForm = this.formBuilder.group({
    searchtext: '',
  });
  constructor(public wikiservice: WikidataService,private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
  }

  showWiki(){
     this.wikiservice.getWiki(this.searchForm.value.searchtext)
     .subscribe(data => this.wik =(data as any).query.search)

  console.log(this.searchForm.value)
  }

}
