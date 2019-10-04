import { Component, OnInit } from '@angular/core';
// import { Task } from './task';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../task';

@Component({
  selector: 'app-carddisplay',
  templateUrl: './carddisplay.component.html',
  styleUrls: ['./carddisplay.component.css']
})
export class CarddisplayComponent implements OnInit {
  closeResult: string;
  updatedItem;
  taskid;
  title='';
  duedate='';
  desc='';
  priority='';
  assignto='';
  assigndate;
  comment='';
  status;

arr: Task[] = [
  new Task(1,'carddisplay','14/08/2019','surgical dashboard','High','akshata','13/08/2019','good design','done'),
  new Task(2,'carddisplay','14/08/2019','surgical dashboard','High','akshata','13/08/2019','good design','done'),
  new Task(3,'carddisplay','14/08/2019','surgical dashboard','High','akshata','13/08/2019','good design','done'),
  new Task(4,'carddisplay','14/08/2019','surgical dashboard','High','akshata','13/08/2019','good design','done'),
];


  constructor(private modalService:NgbModal) { }

  ngOnInit() {}
  openEdit(content1,i){
    console.log(i);
    this.taskid=this.arr[i].taskid;
    this.title=this.arr[i].title;
    this.duedate=this.arr[i].duedate;
    this.desc=this.arr[i].desc;
    this.priority=this.arr[i].priority;
    this.assignto=this.arr[i].assignto;
    this.assigndate=this.arr[i].assigndate;
    this.comment=this.arr[i].comment;
    this.status=this.arr[i].status;


    this.updatedItem = i;
    console.log(this.taskid);
    this.modalService.open(content1, { ariaLabelledBy: 'modal-basic-title' }).result.then(
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
          return 'by pressing ESC';
          } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
          } else {
          return `with: ${reason}`;
          }
          }

          //update method
          UpdatedItem() {
            //console.log(f.value);
let data = this.updatedItem;
// console.log(data);
for (let i = 0; i < this.arr.length; i++) {
if (i == data) {
this.arr[i].taskid=this.taskid ;
this.arr[i].title=this.title;
this.arr[i].duedate=this.duedate;
this.arr[i].desc=this.desc;
this.arr[i].priority=this.priority;
this.arr[i].assignto=this.assignto;
this.arr[i].assigndate= this.assigndate;
this.arr[i].comment=this.comment;
this.arr[i].status=this.status;
console.log(this.arr);
this.taskid;
this.title='';
this.duedate='';
this.desc='';
this.priority='';
this.assignto='';
this.assigndate;
this.comment='';

alert('Updated Successfully');
}
}

}

}
