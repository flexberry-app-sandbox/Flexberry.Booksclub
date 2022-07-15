import { Serializer as SpikerSerializer } from
  '../mixins/regenerated/serializers/i-i-s-booksclub-spiker';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(SpikerSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
