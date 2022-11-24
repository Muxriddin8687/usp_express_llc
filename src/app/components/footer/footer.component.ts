import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SendMessageService } from 'src/app/core/send-message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  fullDate: Date = new Date();
  date: number;

  constructor(private _httpMessage: SendMessageService) {
    this.date = this.fullDate.getFullYear();
  }

  closeNav(){
    window.scroll(0, 0);
  }

  sendFrom(form: NgForm) {

    let data = "Get email" +
               "\nEmail: " + form.value.email;

    data = encodeURI(data);

    this._httpMessage.sendMessage(data).subscribe( (data: any) => {
      form.resetForm();
      alert('Thank you for selecting us!')
    })
  }

}
