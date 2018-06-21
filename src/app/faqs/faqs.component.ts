import { IQuestion, QuestionType, IFaqTypeDescription } from "./question";
import { Component, OnInit } from '@angular/core';
import { FaqsService } from './faqs.service';
import { QuestionFilterPipe } from './question.pipe'

@Component({
  selector: 'app-faqs',  
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  questionList: IQuestion[];
  questionTypes: IFaqTypeDescription[];

  // _questionTypes: string[];
  // get questionTypes(): string[] {
  //   return Object.keys(QuestionType);
  // }

  // _faqTypes: IFaqTypeDescription[];
  // get faqTypes(): IFaqTypeDescription[] {
  //   this._faqsService.getServerData().subscribe(
  //     faqTypes => this._faqTypes = faqTypes.faqTypesArray
  //   );
  //   return this._faqTypes;
  // }

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
