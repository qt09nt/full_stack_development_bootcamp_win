import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  @Input() websiteTitle: string='';
  @Input() childPerson!: object;
  //@Input() childPerson!: object = {};
  @Output() newItemEvent = new EventEmitter<string>();

  this.newItemEvent.emit('This is a test');


  addNewItem(val:string){
    console.log(val);
    this.newItemEvent.emit(val);
  
  }


  ngOnInit(){
    console.log('ngOnInit is called');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnInit is called', changes);
    if(changes.currentValue !== ChangeDetectionStrategy.previousValue){

    }
  }

//   ngDoCheck(){
//     console.log('ngDoCheck is called');
//   }
// }

constructor(){
  console.log('Constructor is called', this.websiteTitle);
}



function ngOnInit() {
  throw new Error('Function not implemented.');
}

