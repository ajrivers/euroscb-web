import { Pipe, PipeTransform } from '@angular/core';
import { FaqsService } from './faqs.service';
import { IQuestion, QuestionType } from './question';

@Pipe({
  name: 'questionTypeFilter'
})
export class QuestionFilterPipe implements PipeTransform {

  transform(questions: IQuestion[], args: string): any {
    return questions.filter(question => question.type.indexOf(args) !== -1);
  }

}
