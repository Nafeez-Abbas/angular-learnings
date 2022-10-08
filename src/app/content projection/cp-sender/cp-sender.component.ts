import { Component } from "@angular/core";


@Component({
    selector: "cp-sender",
    templateUrl: "cp-sender.component.html",
    styleUrls: ["cp-sender.component.scss"]
})
export class CpSenderComponent {

    // Content Projection - is a pattern in which you insert/project content from another component
    // For content projection... add ng-content tag in the template where you want to 
    // project the content. 
    // ng-content is a placeholder that does not create a real DOM element

    // 1.1) Single-slot Content Projection 
        // - refers to creating a component into which you can project one component
        // - a component accepts content from a single source 


    // 2.1) Multi-slot Content Projection
        // - a component accepts content from multiple sources
        // - component can have multiple slots, each slot can specify a selector 
        // which determines which content goes into that slot
        // - use select attribute in ng-content


    // 3.1) Conditional Content Projection
        // - Components that use conditional content projection render content 
        // only when specific conditions are met.
        // Refer: https://angular.io/guide/content-projection#conditional-content-projection
}