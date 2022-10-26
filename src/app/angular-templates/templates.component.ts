import { Component } from "@angular/core";


@Component({
    selector: "templates",
    templateUrl: "templates.component.html",
    styleUrls: ["templates.component.scss"]
})
export class Templates {

    // 1) Text Interpolation - refers to embedding expressions into markup text
    // - uses double curly braces {{ }} as delimiters
    textInterpolation: string = "This is Interpolation";

    // 2) Template Statements
        // - methods or properties that can be used in HTML to respond to user events.
        // Refer more - https://angular.io/guide/template-statements
        
    // 3) Binding
        // - creates live connection between UI(template) and model(component file)

        // 1) Property binding - moves data in 1 direction, from component property to template
        // To bind to an element's property - enclose it in [] brackets which makes a property
        // into target property
        imageAlt: string = "Image";

        // 2) Attribute binding - helps to assing values to attributes
        // resembles property binding, but instead of enclosing property in []
        // prefix attr. to the attribute    

        // 3) Event binding - lets you listen and interact to user actions
        button = "Click me"
        eventBinding() {
            this.button = "Clicked";
        }
        // Binding to keyboard events - https://angular.io/guide/event-binding#binding-to-keyboard-events

        // 4) Class & style binding - add and remove class/styles from an element dynamically
        enableClass1: boolean = true; 
        background: string = "green";
        stylesString: string = "background: green; color: white"
        stylesObject = {
            'background': 'green',
            'color': 'white'
        }

        // 5) Two way binding
            // combines property & event binding
            // syntax - [()]
}