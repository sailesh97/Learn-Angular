import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html', 
  // template: `<app-servers></app-servers>`
  styleUrls: ['./servers.component.css'] // As it's an array, you can use multiple stylesheets
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

/**
 *  One of the two templateUrl or template have to be present here(mandatory). 
 * 
 * You can omit the selector. We can load a component without a selctor using a routing as well.
 * 
 * You can skip the styles as well.
 * 
 * But any one of template or templateUrl must be there
 * 
 */