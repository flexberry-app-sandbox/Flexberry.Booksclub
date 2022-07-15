import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-booksclub-doklad+spiker':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'familiya',
            required: true,
            relationName: 'spiker',
            projection: 'SpikerL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-booksclub-doklad+kniga':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'nazvanie',
            required: true,
            relationName: 'kniga',
            projection: 'KnigaL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
