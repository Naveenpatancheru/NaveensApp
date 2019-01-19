import { Injectable } from '@angular/core';
import { Question } from './question.model';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  formData : Question;
  readonly rootURL="https://naveensappqaapi.azurewebsites.net/api/QuestionDetails";
  constructor(private http: HttpClient) { }
  postQuestion(formData: Question)
  {
    debugger;
  return  this.http.post(this.rootURL,formData);

  }
}
