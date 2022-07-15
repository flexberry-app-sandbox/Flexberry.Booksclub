import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': '',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },

      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
