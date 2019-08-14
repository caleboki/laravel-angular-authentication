import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private Jarwis: JarwisService) { }

  ngOnInit() {
    this.Jarwis.testSpecial().subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }

}
