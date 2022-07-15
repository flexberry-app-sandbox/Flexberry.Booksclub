import { Serializer as Serializer } from
  '../mixins/regenerated/serializers/i-i-s-booksclub';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(Serializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
