import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup
  contactData:any;
  submitted:any;
  error: any;
  loading=false;

  constructor(private fb: FormBuilder, private http:HttpClient) { }

  ngOnInit() {
    this.createForm();
    this.submitted=false;
  }

  createForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      message: ['', [Validators.required]],
    })
  }

  onSubmit(){
    this.loading= true;
    this.submitted=true;
    this.contactData = this.contactForm.value;
    console.log(this.contactData);
    if(this.contactForm.valid){
    this.http.post('https://formspree.io/mayplzlg',{ name: this.contactData.name, replyto: this.contactData.email, message: this.contactData.message},).subscribe(
      response => {
        this.submitted=false;
        this.loading=false;
        this.contactForm.reset();
      });
    }
  }

}
