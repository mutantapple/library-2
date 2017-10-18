import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Media } from './media';

@Injectable()

export class DataService {
  private appUri = 'http://localhost:3000/';  // URL to web api
  
  constructor(private http: HttpClient) { }

  //get the info about a particular media record.
  getSelectedMedia(id: Number): Promise<Media> {
    let rMedia: Media; 
    //promice to return data
    let promise  = new Promise((resolve, reject) => {

      this.http.get<Media[]>
        (`${this.appUri}\all`)
        .toPromise()
        .then(res => {
          rMedia = res.find(media => media.id === id);
          resolve(rMedia);
        },
        msg => {
          reject(msg);
        }
      );
    });

    return promise ;
  }//end getMeidaInfo

  //get all of the books
  getBooks() { }//end getBooks
  //get all of the movies

  getMovies() { }//end getMovies
  //get all the media in the library
  getAll(): Promise<Media[]> {
    //promice to return data
    let promise = new Promise((resolve, reject) => {

      this.http.get<Media>
        (`${this.appUri}\all`)
        .toPromise()
        .then(res => {
          resolve(res);
        },
        msg => {
          reject(msg);
        }
        );
    });

    return promise;
  }//end getAll

} //end DataService

//interface MediaFormat {
//  id: number;
//  title: string;
//  type: number;
//  checkouted: number;
//}
