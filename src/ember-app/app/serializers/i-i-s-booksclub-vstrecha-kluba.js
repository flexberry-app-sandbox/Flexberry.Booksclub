import { Serializer as VstrechaKlubaSerializer } from
  '../mixins/regenerated/serializers/i-i-s-booksclub-vstrecha-kluba';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(VstrechaKlubaSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
