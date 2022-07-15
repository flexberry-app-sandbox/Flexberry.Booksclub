import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  familiya: DS.attr('string'),
  imya: DS.attr('string'),
  otchestvo: DS.attr('string')
});

export let ValidationRules = {
  familiya: {
    descriptionKey: 'models.i-i-s-booksclub-spiker.validations.familiya.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  imya: {
    descriptionKey: 'models.i-i-s-booksclub-spiker.validations.imya.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  otchestvo: {
    descriptionKey: 'models.i-i-s-booksclub-spiker.validations.otchestvo.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('SpikerE', 'i-i-s-booksclub-spiker', {
    familiya: attr('Фамилия', { index: 0 }),
    imya: attr('Имя', { index: 1 }),
    otchestvo: attr('Отчество', { index: 2 })
  });

  modelClass.defineProjection('SpikerL', 'i-i-s-booksclub-spiker', {
    familiya: attr('Фамилия', { index: 0 }),
    imya: attr('Имя', { index: 1 }),
    otchestvo: attr('Отчество', { index: 2 })
  });
};
