import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
    providedIn: 'root'
})
export class DataService{
    constructor(private http:HttpClient) {}

    getPosts()
    {
        return this.http.get('https://naveensappqaapi.azurewebsites.net/api/QuestionDetails');
      //  https://jsonplaceholder.typicode.com/posts
      //  return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }
    
}