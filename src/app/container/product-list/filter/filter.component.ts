import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  all: number =0;

  @Input()
  inStock: number=0;

  @Input()  //父組件到子組件傳值
  outOfstock: number =0;

  @Output()  //子組件到父組件傳值
  selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>()

  selectedFilterRadioButton: string = 'all';

  onSelectedFilterRadioButtonChanged(){
    console.log('selectedFilterRadioButtonChanged event raised')
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }

}
