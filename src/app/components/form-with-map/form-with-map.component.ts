import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SendMessageService } from 'src/app/core/send-message.service';

@Component({
  selector: 'app-form-with-map',
  templateUrl: './form-with-map.component.html',
  styleUrls: ['./form-with-map.component.scss']
})
export class FormWithMapComponent {

  constructor(private _httpMessage: SendMessageService) { }

  sendFrom(form: NgForm) {

    let serviceName = '';
    switch(+form.value.service) {
      case 1: serviceName = 'Cars'; break;
      case 2: serviceName = 'Goods'; break;
      case 3: serviceName = 'Raw materials'; break;
      default: serviceName = 'Others'; break;
    }

    let data = "New service options" +
               "\nFrom: " + form.value.from +
               "\nTo: " + form.value.to +
               "\nDate: " + form.value.date +
               "\nService: " + serviceName +
               "\nEmail: " + form.value.email +
               "\nPhone: " + form.value.phone;

    data = encodeURI(data);

    this._httpMessage.sendMessage(data).subscribe( (data: any) => {
      form.resetForm();
      alert('Thank you for selecting us!')
    });
  }

}

