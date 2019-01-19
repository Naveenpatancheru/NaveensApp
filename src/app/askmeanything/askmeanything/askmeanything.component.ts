import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { DataService} from '../../data.service';
import { Observable} from 'rxjs';
import { QuestionService } from 'src/app/shared/question.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-askmeanything',
  templateUrl: './askmeanything.component.html',
  styleUrls: ['./askmeanything.component.css']
})
export class AskmeanythingComponent implements OnInit {
public questionDetails: QuestionDetails[];
posts:Object;
msg1: string = null;
msg2: string = null;
show:boolean=false;
showAns:boolean=false;
showQuestion:boolean=true;

// This is working before adding the shared module things in shared ,app.module.ts
  // constructor(private data: DataService) {
    
  //   // http.get('https://naveensappqaapi.azurewebsites.net/'+'api/QuestionDetails').subscribe(result=>{
  //   //   this.questionDetails=result.json() as QuestionDetails[];
  //   // },
  //   // error =>console.error(error));


  // }
  constructor (private service:QuestionService){

  }

  // Commented this as error and we dont get data as we did this
  // ngOnInit() {
  //   this.data.getPosts().subscribe(
  //     data => this.posts=data
  //   );
    
  // }

  ngOnInit() {
    this.resetForm();
    //this.service.formData['Id'].('valueE');
   
  }
  resetForm(form? : NgForm)
  {
    let random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    if(form!=null)
    form.resetForm();
    this.service.formData = {
      Id: random,
      Question : '',
      Answer: '',
      FirstName:'',
      LastName:'',
      Email:'',
      PhoneNumber:'',
      More1:'',
      More2:'',


    }
  }


  toggle() {
   this.showAns=true;
   this.showQuestion=false;
  }
  toggleAns()
  {
    this.showAns=false;
    this.showQuestion=true;
  }
  getAnswer(form:NgForm)
{
debugger;
}
  

btnQuestion(form: NgForm)
{
  debugger;

}

onSubmit(form: NgForm){
  debugger;
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
