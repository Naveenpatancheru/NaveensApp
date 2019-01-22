import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
    providedIn: 'root'
})
export class DataService{
    constructor(private http:HttpClient) {}
    QId:number;
    getPosts()
    {
        debugger;
       return this.http.get('https://naveensappqaapi.azurewebsites.net/api/QuestionDetails/123456');
      //  https://jsonplaceholder.typicode.com/posts
      // return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }
    
}