import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html', 
  // template: `<app-servers></app-servers>`
  styleUrls: ['./servers.component.css'] // As it's an array, you can use multiple stylesheets
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ["Test Server", "Test Server 2"];
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
    // casting it
    // To inform Typescript that event.target is of HTMLInputElement type
    // By mentioning in within <> and then with ()
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

 /** 
  * Rules for selector property:
  *   1. It should be unique and should not override with any existing HTML Element Name
  *   2.  
  *     i.   HTML Selector --> 1st Way: selector: 'app-servers' ---> In HTML File <app-servers></app-servers>
  *     ii.  Attribute Selector ---> 2nd Way: selector: '[app-servers]' -----> In html file <div app-servers></div>
  *     iii. CSS Selector ---> 3rd Way: selector: '.app-servers' -----> In HTML file <div class="app-servers"></div>
  * 
  *   3. Selecting By ID won't work.
  *   4. Pseudo selection won't work.
  * 
 */