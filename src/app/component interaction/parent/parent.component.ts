import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { ChildComponent } from "../child/child.component";
import { ParentChildDataService } from "../parent-child-data.service";


@Component({
    selector: "ci-parent",
    templateUrl: "./parent.component.html",
    styleUrls: ["./parent.component.scss"],
    providers: [ParentChildDataService]
})
export class ParentComponent implements AfterViewInit {

    
    // (1.1) Pass data from parent to child using @Input() decorator
    passtoChild: string = 'Hi';

    // (2.1) Intercept Input property changes with a setter
    inputName: string = "ABC";

    // (3.1) Parent listens for child event
    countVotes: number = 0;
    onVoted(didVote: boolean) {
        didVote? this.countVotes++ : null;
    }

    // (4.1) Parent interacts with child using local variable
    // Here, Parent gets access to the child's variables and methods
    // Achieved using template reference variable


    // (5.1) Parent calls an @ViewChild
    // The local variable approach(4) is limited since the wiring is entirely done in 
    // parent's template. 
    // Parent's component class cannot be wired using this approach, Hence @ViewChild can be used.
    // When Parent's component class requires access to child properties, inject the child component
    // into parent as ViewChild
    // Note: re-using (4.2)
    // We have @ViewChild which refers to the child component
    // using the @ViewChild variable, child's properties and methods can be accessed
    // in both template and class
    @ViewChild(ChildComponent) childComp!: ChildComponent;
    onAgreeClicked() {
        this.childComp.onAgree()
    }
    counter: number = 0;
    // The ChildComponent properties/methods are not available until after Angular displays the 
    // parent view, so if directly access the child properties in template, it may throw error
    // as the property/method that we are trying to access will not be available at that time.
    // Hence, ngAfterViewInit() hook is used
    // This lifecycle hook is triggered after the angular initializes the component's view.
    // Thus, the above issue is resolved
    ngAfterViewInit(): void {
        this.counter = this.childComp.counter;
    }


    // (6.1) Parent and child communicate using a service
    // The Service can be accessed only by the Parent and its children and components outside
    // this subtree cannot access the service
    constructor(private service: ParentChildDataService) {
    }
    // ParentChildDataService (Service class) is added to providers array of the component
    // and hence, all its child components can have access to the Service
    // The Service is added to the providers array and is injected in the contructor
    setDataInService() {
        this.service.dataSetByParent = 'Parent Data';
    }

}