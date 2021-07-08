import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerComponent } from '../app/server/server.component'; // While imporing the file, we don't need to mention the extension here, The extension is added by webpack which bundles our application automatically.  

/**
 * Any new component we create needs to be registered here in declarations array. Otherwise angular won't recognize the new component's selector string, when we will use it in app.component's template file.
 * 
 * bootstrap array will hold the component, which angular should be aware of when it load the app. As it will come across the app-root selector in our index.html page while loading the app.
 * main.ts --->  app.module.ts ---> app.component.
 * 
 * imports array allows us to add some other module to this module. We can split our app into multiple modules and can use a module by exporting it and adding it to imports array.
 * 
 */

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule // Angular it self split up into different modules. Browser module gives us all the base functionality we need to start our app.
  ],
  providers: [],
  bootstrap: [AppComponent] // The root component
 
})
export class AppModule { }
