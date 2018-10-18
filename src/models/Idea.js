import { Model } from 'objection';

export default class Idea extends Model {
  static tableName = 'ideas';

  static jsonSchema = {
    type: 'object',
    required: ['content', 'impact', 'ease', 'confidence'],
    properties: {
      id: { type: 'integer' },
      content: { type: 'string', minLength: 1, maxLength: 255 },
      impact: { type: 'integer', minimum: 0, maximum: 10 },
      ease: { type: 'integer', minimum: 0, maximum: 10 },
      confidence: { type: 'integer', minimum: 0, maximum: 10 }
    }
  };
}
