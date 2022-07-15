import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  nazvanie: DS.attr('string'),
  avtor: DS.attr('string'),
  kolichestvoStranic: DS.attr('number'),
  uRLOblozhki: DS.attr('string'),
  uRLOpisaniya: DS.attr('string'),
  tegi: DS.attr('string'),
  /**
    Non-stored property.

    @property srednyayaOcenka
  */
  srednyayaOcenka: DS.attr('decimal'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'srednyayaOcenkaCompute' method in model class (outside of this mixin) if you want to compute value of 'srednyayaOcenka' property.

    @method _srednyayaOcenkaCompute
    @private
    @example
      ```javascript
      _srednyayaOcenkaChanged: on('init', observer('srednyayaOcenka', function() {
        once(this, '_srednyayaOcenkaCompute');
      }))
      ```
  */
  _srednyayaOcenkaCompute: function() {
    let result = (this.srednyayaOcenkaCompute && typeof this.srednyayaOcenkaCompute === 'function') ? this.srednyayaOcenkaCompute() : null;
    this.set('srednyayaOcenka', result);
  }
});

export let ValidationRules = {
  nazvanie: {
    descriptionKey: 'models.i-i-s-booksclub-kniga.validations.nazvanie.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  avtor: {
    descriptionKey: 'models.i-i-s-booksclub-kniga.validations.avtor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  kolichestvoStranic: {
    descriptionKey: 'models.i-i-s-booksclub-kniga.validations.kolichestvoStranic.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  uRLOblozhki: {
    descriptionKey: 'models.i-i-s-booksclub-kniga.validations.uRLOblozhki.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  uRLOpisaniya: {
    descriptionKey: 'models.i-i-s-booksclub-kniga.validations.uRLOpisaniya.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  tegi: {
    descriptionKey: 'models.i-i-s-booksclub-kniga.validations.tegi.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  srednyayaOcenka: {
    descriptionKey: 'models.i-i-s-booksclub-kniga.validations.srednyayaOcenka.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('KnigaE', 'i-i-s-booksclub-kniga', {
    nazvanie: attr('Название', { index: 0 }),
    avtor: attr('Автор', { index: 1 }),
    kolichestvoStranic: attr('Количество страниц', { index: 2 }),
    uRLOblozhki: attr('U r l обложки', { index: 3 }),
    uRLOpisaniya: attr('U r l описания', { index: 4 }),
    tegi: attr('Теги', { index: 5 }),
    srednyayaOcenka: attr('Средняя оценка', { index: 6 })
  });

  modelClass.defineProjection('KnigaL', 'i-i-s-booksclub-kniga', {
    nazvanie: attr('Название', { index: 0 }),
    avtor: attr('Автор', { index: 1 }),
    kolichestvoStranic: attr('Количество страниц', { index: 2 }),
    uRLOblozhki: attr('U r l обложки', { index: 3 }),
    uRLOpisaniya: attr('U r l описания', { index: 4 }),
    tegi: attr('Теги', { index: 5 }),
    srednyayaOcenka: attr('Средняя оценка', { index: 6 })
  });
};
