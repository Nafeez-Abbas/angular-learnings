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


    // 4) Pipes - transform string, amount, date or other data for display
        // - simple functions to use in templates - accept an input value and return transformed value
        // - Builtin Pipes => DatePipe, UpperCasePipe, DecimalPipe
        // - Pipe operator (|)
        // syntax: value | pipeName:Parameter
        // If Pipe accepts multiple parameters: value | pipeName:Parameter1:Parameter2
        // Chaining Pipes => value | pipeName1 | pipe2


    // 5) Template Reference Variable
        // - Syntax: Declare using # symbol
        // - <input #phone placeholder="phone number" /> - here, phone is the template ref variable
        // and input element is its value.
        
        // How Angular assigns values to template variables:
            // Angular assigns a template variable a value based on where you declare the variable
            // 1) If you declare the variable on a component, the variable refers to the component instance.
            // 2) If you declare the variable on a standard HTML tag, the variable refers to the element.
            // 3) If you declare the variable on an <ng-template> element, the variable refers to a TemplateRef instance which represents the template
        
        // Template input variable:
        // A template input variable is a variable with a value that is set when an instance of that template is created.
        heroes: string[] = ['Hero 1', 'Hero 2'];
        // Refer: (https://angular.io/guide/template-reference-variables#template-input-variable)

    // 6) You can use SVG's as templates
        // Refer: (https://angular.io/guide/svg-in-templates)
}