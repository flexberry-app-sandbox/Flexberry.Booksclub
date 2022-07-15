import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  dataVstrechi: DS.attr('date'),
  doklad: DS.hasMany('i-i-s-booksclub-doklad', { inverse: 'vstrechaKluba', async: false })
});

export let ValidationRules = {
  dataVstrechi: {
    descriptionKey: 'models.i-i-s-booksclub-vstrecha-kluba.validations.dataVstrechi.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  doklad: {
    descriptionKey: 'models.i-i-s-booksclub-vstrecha-kluba.validations.doklad.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('VstrechaKlubaE', 'i-i-s-booksclub-vstrecha-kluba', {
    dataVstrechi: attr('Дата встречи', { index: 0 }),
    doklad: hasMany('i-i-s-booksclub-doklad', 'Доклад', {
      dataDoklada: attr('Дата доклада', { index: 0 }),
      ocenkaKnigi: attr('Оценка книги', { index: 1 }),
      uRLPrezentacii: attr('U r l презентации', { index: 2 }),
      uRLVideo: attr('U r l видео', { index: 3 }),
      recenziya: attr('Рецензия', { index: 4 }),
      spiker: belongsTo('i-i-s-booksclub-spiker', 'Спикер', {
        familiya: attr('~', { index: 6, hidden: true }),
        imya: attr('~', { index: 9 }),
        otchestvo: attr('~', { index: 10 })
      }, { index: 5, displayMemberPath: 'familiya' }),
      kniga: belongsTo('i-i-s-booksclub-kniga', 'Книга', {
        nazvanie: attr('~', { index: 8, hidden: true })
      }, { index: 7, displayMemberPath: 'nazvanie' })
    })
  });

  modelClass.defineProjection('VstrechaKlubaL', 'i-i-s-booksclub-vstrecha-kluba', {
    dataVstrechi: attr('Дата встречи', { index: 0 })
  });
};
