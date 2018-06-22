import { IQuestion, IFaqTypeDescription } from "./question";
import { Component, OnInit } from '@angular/core';
import { FaqsService } from './faqs.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  questionList: IQuestion[];
  questionTypes: IFaqTypeDescription[];

  constructor(private _faqsService: FaqsService) { }

  ngOnInit(): void {
    this._faqsService.getServerData().subscribe(
      faqs => {
        this.questionList = faqs.faqsArray;
        this.questionTypes = faqs.faqTypesArray;
      }
    )
  }

}
