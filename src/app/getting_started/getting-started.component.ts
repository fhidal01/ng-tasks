import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent {
  constructor(private router: Router, private currentRoute: ActivatedRoute) {}

  public getStarted () {
    console.log('hitting');
    this.router.navigate(['../list', '1']);
  }
}
