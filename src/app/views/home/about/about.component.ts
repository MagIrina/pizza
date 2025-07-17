import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PopupComponent} from "../../../shared/components/popup/popup.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  //что бы вызвать функцию open popup
  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  ngAfterViewInit() {
    this.popupComponent.open();
  }

  // ngAfterViewInit() {
  //   const modalRef = this.modalService.open(PopupComponent);
  //   modalRef.componentInstance.data = 'About component';
  //
  //   // this.modalService.open(this.popup, {});
  // }

}
