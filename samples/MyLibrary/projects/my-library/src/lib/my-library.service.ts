import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyLibraryService {
  constructor() {}

  firstLetterToUpper(word: string): string {
    let firstLetter = word.substring(0, 1);
    const restWord = word.substring(1, word.length);

    firstLetter = firstLetter.toUpperCase();
    const wordFirstUpper = firstLetter + restWord;
    return wordFirstUpper;
  }
}
