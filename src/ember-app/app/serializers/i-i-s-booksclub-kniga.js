import { Serializer as KnigaSerializer } from
  '../mixins/regenerated/serializers/i-i-s-booksclub-kniga';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(KnigaSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
