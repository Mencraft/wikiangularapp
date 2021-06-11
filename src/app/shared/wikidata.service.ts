import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Wiki } from './Wiki';


@Injectable({
  providedIn: 'root'
})
export class WikidataService {

  constructor(private http:HttpClient) { }

  getWiki(terms:string) {
   let wikiurl = "https://en.wikipedia.org/w/api.php?action=query&list=search&origin=*&srsearch="+terms+"&utf8=&format=json"
    return this.http.get<Wiki>(wikiurl);
  }
}
