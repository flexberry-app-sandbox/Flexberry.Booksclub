import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISBooksclubKnigaLForm from './forms/i-i-s-booksclub-kniga-l';
import IISBooksclubSpikerLForm from './forms/i-i-s-booksclub-spiker-l';
import IISBooksclubVstrechaKlubaLForm from './forms/i-i-s-booksclub-vstrecha-kluba-l';
import IISBooksclubKnigaEForm from './forms/i-i-s-booksclub-kniga-e';
import IISBooksclubSpikerEForm from './forms/i-i-s-booksclub-spiker-e';
import IISBooksclubVstrechaKlubaEForm from './forms/i-i-s-booksclub-vstrecha-kluba-e';
import IISBooksclubDokladModel from './models/i-i-s-booksclub-doklad';
import IISBooksclubKnigaModel from './models/i-i-s-booksclub-kniga';
import IISBooksclubSpikerModel from './models/i-i-s-booksclub-spiker';
import IISBooksclubVstrechaKlubaModel from './models/i-i-s-booksclub-vstrecha-kluba';
import IISBooksclubModel from './models/i-i-s-booksclub';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-booksclub-doklad': IISBooksclubDokladModel,
    'i-i-s-booksclub-kniga': IISBooksclubKnigaModel,
    'i-i-s-booksclub-spiker': IISBooksclubSpikerModel,
    'i-i-s-booksclub-vstrecha-kluba': IISBooksclubVstrechaKlubaModel,
    'i-i-s-booksclub': IISBooksclubModel
  },

  'application-name': '',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },

      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-booksclub-kniga-l': IISBooksclubKnigaLForm,
    'i-i-s-booksclub-spiker-l': IISBooksclubSpikerLForm,
    'i-i-s-booksclub-vstrecha-kluba-l': IISBooksclubVstrechaKlubaLForm,
    'i-i-s-booksclub-kniga-e': IISBooksclubKnigaEForm,
    'i-i-s-booksclub-spiker-e': IISBooksclubSpikerEForm,
    'i-i-s-booksclub-vstrecha-kluba-e': IISBooksclubVstrechaKlubaEForm
  },

});

export default translations;
