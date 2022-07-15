import { Serializer as DokladSerializer } from
  '../mixins/regenerated/serializers/i-i-s-booksclub-doklad';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(DokladSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
