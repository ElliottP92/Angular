import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
// Output is oppsite of the then Input (child to parent)
export class SearchBarComponent implements OnInit {
  // generic annotation <>
  @Output() submitted = new EventEmitter<string>();
term = "";
  constructor() { }

  ngOnInit(): void {
  }

  // Stops the browser from attemping form request 
  // passes the new instance of submitted to the form
  onFormSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }

}
