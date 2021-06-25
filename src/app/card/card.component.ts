import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { User } from './../models/user.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() user: User;
  @HostBinding('attr.class') cssClass = 'col-11 col-sm-11 col-md-5 col-lg-3';

constructor() { }

ngOnInit(): void {
}

}
