import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SendMessageService } from 'src/app/core/send-message.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  constructor(private _httpMessage: SendMessageService) { }

  sendFrom(form: NgForm) {

    let data = "Meassage from Contacts page" +
               "\nName: " + form.value.name +
               "\nPhone: " + form.value.phone +
               "\nEmail: " + form.value.email +
               "\nText: " + form.value.text;

    data = encodeURI(data);

    this._httpMessage.sendMessage(data).subscribe( (data: any) => {
      form.resetForm();
      alert('Thank you for selecting us!')
    })
  }

}
