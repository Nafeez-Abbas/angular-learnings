import { Component, Input } from "@angular/core";


@Component({
    selector: "cp-receiver",
    templateUrl: "cp-receiver.component.html",
    styleUrls: ["cp-receiver.component.scss"]
})
export class CpReceiverComponent {
    @Input() option!: number;
}