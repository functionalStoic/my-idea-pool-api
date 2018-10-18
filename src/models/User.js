import Password from 'objection-password';
import { Model } from 'objection';

export default class User extends Password()(Model) {
  static tableName = 'users';

  static jsonSchema = {
    type: 'object',
    required: ['email', 'name', 'refresh_token'],
    properties: {
      email: { type: 'string', format: 'email' },
      name: { type: 'string', minLength: 1, maxLength: 255 },
      refresh_token: { type: 'string' }
    }
  };
}
