import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-i18n';
  langSelect;
  vertSelect = 'correctional';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    this.langSelect = browserLang.match(/en|fr/) ? browserLang : 'en';
    translate.use(this.langSelect + '-' + this.vertSelect);
  }

  onVerticalChange(event) {
    console.log('ev -- ', event.target.value);
    this.vertSelect = event.target.value;
  }

  onLangChange(event) {
    this.langSelect = event.target.value;

  }

  apply() {
    this.translate.use(this.langSelect + '-' + this.vertSelect);
  }
}
