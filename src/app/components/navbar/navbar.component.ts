import { Component, OnInit } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  openUploadModal(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title", size: "lg" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
