import { Component } from '@angular/core';
import { ApidataService } from '../services/apidata.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  users:any;
  constructor(private apidata:AppComponent){
    apidata.users().subscribe((data: any)=>{
      this.users=data
    })
  }
}
