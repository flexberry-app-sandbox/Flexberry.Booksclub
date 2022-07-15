import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  dataDoklada: DS.attr('date'),
  ocenkaKnigi: DS.attr('number'),
  uRLPrezentacii: DS.attr('string'),
  uRLVideo: DS.attr('string'),
  recenziya: DS.attr('string'),
  spiker: DS.belongsTo('i-i-s-booksclub-spiker', { inverse: null, async: false }),
  kniga: DS.belongsTo('i-i-s-booksclub-kniga', { inverse: null, async: false }),
  vstrechaKluba: DS.belongsTo('i-i-s-booksclub-vstrecha-kluba', { inverse: 'doklad', async: false })
});

export let ValidationRules = {
  dataDoklada: {
    descriptionKey: 'models.i-i-s-booksclub-doklad.validations.dataDoklada.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  ocenkaKnigi: {
    descriptionKey: 'models.i-i-s-booksclub-doklad.validations.ocenkaKnigi.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  uRLPrezentacii: {
    descriptionKey: 'models.i-i-s-booksclub-doklad.validations.uRLPrezentacii.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  uRLVideo: {
    descriptionKey: 'models.i-i-s-booksclub-doklad.validations.uRLVideo.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  recenziya: {
    descriptionKey: 'models.i-i-s-booksclub-doklad.validations.recenziya.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  spiker: {
    descriptionKey: 'models.i-i-s-booksclub-doklad.validations.spiker.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  kniga: {
    descriptionKey: 'models.i-i-s-booksclub-doklad.validations.kniga.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  vstrechaKluba: {
    descriptionKey: 'models.i-i-s-booksclub-doklad.validations.vstrechaKluba.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('DokladE', 'i-i-s-booksclub-doklad', {
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
  });
};
