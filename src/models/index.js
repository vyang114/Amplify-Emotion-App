// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Relation, Third, Second, Person, ImageEntity, Entity, Post } = initSchema(schema);

export {
  Relation,
  Third,
  Second,
  Person,
  ImageEntity,
  Entity,
  Post
};