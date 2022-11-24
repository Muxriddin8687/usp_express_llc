import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SendMessageService } from 'src/app/core/send-message.service';

@Component({
  selector: 'app-getaquote',
  templateUrl: './getaquote.component.html',
  styleUrls: ['./getaquote.component.scss']
})
export class GetaquoteComponent {

  constructor(private _httpMessage: SendMessageService) { }

  sendFrom(form: NgForm) {

    let data = "Meassage from get a quote page" +
               "\nFrom: " + form.value.from +
               "\nTo: " + form.value.to +
               "\nYear: " + form.value.year +
               "\nMake: " + form.value.make +
               "\nModel: " + form.value.model +
               "\nTruck: " + form.value.truck +
               "\nDriver: " + form.value.driver +
               "\nDate: " + form.value.date +
               "\nName: " + form.value.name +
               "\nPhone: " + form.value.phone +
               "\nEmail: " + form.value.email;

    data = encodeURI(data);

    this._httpMessage.sendMessage(data).subscribe( (data: any) => {
      form.resetForm();
      alert('Thank you for selecting us!')
    })
  }

}
