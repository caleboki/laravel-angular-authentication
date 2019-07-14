import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../../services/jarwis.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {
  public form = {
    email: null
  };


  constructor(
    private Jarvis: JarwisService,
    private notify: SnotifyService,
    private Notfiy:SnotifyService
  ) { }

  ngOnInit() {
    
  }


  onSubmit() {
    this.Notfiy.info('Please Wait...', {timeout:3000})
    this.Jarvis.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );
    this.form.email = null
  }

  handleResponse(res) {
    this.Notfiy.success(res.data,{timeout:0});
    console.log(res)
  }

}