import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ParentChildDataService } from "../parent-child-data.service";


@Component({
    selector: "ci-child",
    templateUrl: "./child.component.html",
    styleUrls: ["./child.component.scss"]
})
export class ChildComponent {

    @Input('option') option!: number;

    // ! (not null assertion operator)
    // tell the compiler "this expression cannot be null or undefined here, 
    // so don't complain about the possibility of it being null or undefined."

    // (1.2)
    // using @Input(), creating a variable. The value provided inside '' in the decorator
    // will be used in the parent component to pass the data.
    // with @Input(), we can pass the components as well
    @Input('dataFromParent') parentData!: string;


    // (2.2)
    // @Input() can have getter setters
    // The input from the parent can be intercept using the input property setter
    // and can act upon it
    // Here input property name is converted to lowercase and set to another variable
    modifiedName!: string;
    @Input()
    get name(): string {
        return this.modifiedName;
    }
    set name(inputName: string) {
        this.modifiedName = inputName.toLowerCase();
    }


    // (3.2)
    // Child has an EventEmitter property with which it emits events
    // Parent binds to that event and reacts to them
    // EventEmitter property is an Output property - @Output
    // this output property emits a boolean value
    @Output() voted = new EventEmitter<boolean>();
    onVoteClick() {
        this.voted.emit(true);
    }


    // (4.2) 
    // The counter variable and the onAgree() will be accessed from the parent
    counter: number = 10;
    onAgree() {
        this.counter++;
    }


    // (6.2)
    // Accessing  the data set by parent in the child
    constructor(private service: ParentChildDataService) {}
    data: string = '';
    displayParentData() {
        this.data = 'Displaying in child : ' + this.service.dataSetByParent;
    }

}