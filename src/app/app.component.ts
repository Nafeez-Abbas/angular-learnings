import { Component } from '@angular/core';


// 1) Component :- building block of the application
// includes a TS file with @Component() decorator, an HTML and CSS
// @Component() decorator specifies 1) CSS selector using which the component can be used in other templates,
// 2) An HTML template that gives the structure of the component and 3) List of CSS (optional)

// Angular's Component model provides encapsulation and better readability
// The HTML template can be either inline or file path

// Create a component with ng generate component <name> [options]
// check documentation(https://angular.io/cli) for various values for [options]
// the command creates the following:
// 1) A folder with the component name provided
// 2) A template file, 3) A Component file, 4) A CSS file, 5) A Testing Specification file  

// Create a component manually
// 1) create a ts file (abc.component.ts)
// 2) add a class and export it
// 3) annotate it with @Component and set the properties of it
// 4) Add the component to the declarations array of module

// A CSS selector instructs angular to instantiate the particular component whenever it finds the
// corresponding tag in HTML

// @Component() has a property - encapsulation that is used to control the component encapsulation
// values - 1) ViewEncapsulation.ShadowDom, 
// 2) Emulated (default & recommended) - CSS applied only within component and do not affect other components, 
// 3) None - has no encapsulation, styles are globally applied across all components

// components with emulated view encapsulation has some extra attributes when rendered
// two kinds of extra attributes
// 1) _nghost - added to elements that enclose other elements
// 2) _ngcontent - added to child elements
// the exact values of these attributes are a private implementation of Angular
// they are automatically generated and shouldn't be refered in code
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basics';

  // 1.1) Component Lifecycle:-
  // A component lifecycle starts when angular instantiates the component class and renders it template
  // The lifecycle continues with change detection and ends when component instance is destroyed and
  // the template is removed

  // apps can use the lifecycle hook events to tap the key events and perform necessary actions
  // the lifecycle events can be used by implementing the lifecycle hook interfaces
  // each interface has a prototype for a single hook method
  // the hook name is the interface name prefixed with ng (ex- OnInit interface has ngOnInit() hook)
  
  // look into (https://angular.io/guide/lifecycle-hooks) for the available hooks

  save() {
    console.log("save event clicked");
  }
}
