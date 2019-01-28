import { Injectable } from '@angular/core';
import { Question } from './question.model';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { QuestionDetails } from '../models/questiondetails.model';
import { Observable ,throwError} from 'rxjs';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';

const httpOptions ={
headers: new HttpHeaders(
  {
    'Content-Type': 'application/json'
  }
)

};
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  formData : Question;
  list : Question[];
  dataTest: any[];
  QuestionId : Question;
  QId:number;
  readonly rootURL="https://naveensappqaapi.azurewebsites.net/api/QuestionDetails";
  constructor(private http: HttpClient) { }
  postQuestion(formData: Question)
  {
    debugger;
  return  this.http.post(this.rootURL,formData);

  }

  getAnswer(QId: number) : Observable<Question>
  {
    var requestoptions = new RequestOptions({
      headers: new Headers({ 'Content-Type': 'application/json' })
    })

   var urllocal=this.rootURL+'/'+QId;
   return this.http.get(urllocal,httpOptions) as Observable<Question>;


  }
  private handleError(error: Response | any) {
   
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return throwError(errMsg);
  }

  
}
