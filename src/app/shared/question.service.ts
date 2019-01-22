import { Injectable } from '@angular/core';
import { Question } from './question.model';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { QuestionDetails } from '../models/questiondetails.model';
import { Observable ,throwError} from 'rxjs';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';

// const headers = new Headers({ 'Content-Type': 'application/json' });
// headers.append('Accept', 'text/html');
// const options = new RequestOptions({ headers: headers });

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

     
  //   // http.get('https://naveensappqaapi.azurewebsites.net/'+'api/QuestionDetails').subscribe(result=>{
  //   //   this.questionDetails=result.json() as QuestionDetails[];
  //   // },
  //   // error =>console.error(error));
  debugger;
   var urllocal=this.rootURL+'/'+QId;
   return this.http.get(urllocal,httpOptions) as Observable<Question>;

  //  getCounsellingTypes(): Observable<string[]> {
  //   let url = this.baseUrl + 'counselingTypes';
  //   return this.http.get(url, options).pipe(map((r) => r.json()), catchError(this.handleError));

    // this.http.get('https://naveensappqaapi.azurewebsites.net/api/QuestionDetails/'+QId)
    //  .toPromise().then(res => this.list= res as Question[]);
    // debugger;
    // this.http.get(this.rootURL)
    // .subscribe(
     
    //   data => console.log(data),
    //   err => console.log(err),
    //   () => console.log('Task Complete')
    //   );
   //   debugger;
    //.toPromise().then(res => this.list =res as Question[]);


  //   debugger;
  //  this.http.get('https://naveensappqaapi.azurewebsites.net/'+'api/QuestionDetails').subscribe(result=>{
  //   this.QuestionId=result.json() as QuestionId;
  // this.http.get('https://naveensappqaapi.azurewebsites.net/api/QuestionDetails'+QId).subscribe(result=>{
  //      this.QuestionId.Answer=result.json() as this.QuestionId;
  //   },
  //    error =>console.error(error));

  }
  private handleError(error: Response | any) {
    debugger;
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
