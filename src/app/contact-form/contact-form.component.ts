import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    document.querySelector('#contactFormModal .modal-body').insertAdjacentHTML('afterbegin', `
    <div class="alert alert-success" role="alert">
      تم الإرسال بنجاح
    </div>
    `)

    setTimeout(()=>{
      document.querySelector('#contactFormModal .modal-body .alert').remove()
    }, 10000)
  }
}
