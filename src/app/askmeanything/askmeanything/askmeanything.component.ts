import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { DataService} from '../../data.service';
import { Observable} from 'rxjs';
import { QuestionService } from 'src/app/shared/question.service';
import { NgForm } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { Question } from 'src/app/shared/question.model';
import { httpFactory } from '@angular/http/src/http_module';

@Component({
  selector: 'app-askmeanything',
  templateUrl: './askmeanything.component.html',
  styleUrls: ['./askmeanything.component.css']
})
export class AskmeanythingComponent implements OnInit {
public questionDetails: QuestionDetails[];
posts:Object=null;
msg1: string = null;
msg2: string = null;
show:boolean=false;
showAns:boolean=false;
showQuestion:boolean=true;
question :Question;
isCheckedAnony: boolean=true;

  constructor (private service:QuestionService,private http:HttpClient,private data: DataService){

  }


  ngOnInit() {
    this.resetForm();
    this.isCheckedAnony=true;

   
  }
  resetForm(form? : NgForm)
  {
    let random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    if(form!=null)
    form.resetForm();
    this.service.formData = {
      Id: random,
      question : '',
      answer: '',
      FirstName:'',
      LastName:'',
      Email:'',
      PhoneNumber:'',
      More1:'',
      More2:'',


    }
  }
  toggleAnonymous()
  {

  }
  checkAnony(){
   
    if(this.isCheckedAnony==false)
    {
  this.isCheckedAnony=true;
    }
    else
    {
      this.isCheckedAnony=false;

    }
 }

  toggle() {
   this.showAns=true;
   this.showQuestion=false;
  this.service.formData.Id=null;
  this.show=false;

  }
  toggleAns()
  {
    let random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    this.showAns=false;
    this.showQuestion=true;
    this.service.formData.Id=random;
    this.question.question="";
    this.question.answer="";
    this.question.Id;
  }
  getAnswer(form:NgForm)
{


this.service.getAnswer(form.controls.EnterID.value).subscribe(
 
 results=>{
  debugger;
this.question=results as Question;
console.log("RESULTS",results);
console.log("RESULTS2",this.question);
 }
);

}
  

btnQuestion(form: NgForm)
{
 

}

onSubmit(form: NgForm){

this.insertRecord(form);
}
insertRecord(form: NgForm)
{

this.service.postQuestion(form.value).subscribe(res =>
  {
    this.show=true;
    this.msg1 = 'Success!';
    this.msg2 = 'Your question has been reached Naveen successfully.';
  })
}
}
interface QuestionDetails{
 Id: string;
 Question: string;
 Answer:string;
 FirstName: string;
 LastName: string;
 Email: string;
 PhoneNumber: string;
 More1:string;
 More2: string;

}
