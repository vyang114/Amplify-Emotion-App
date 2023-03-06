import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerRelation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Relation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly box1?: string | null;
  readonly box2?: string | null;
  readonly relation?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRelation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Relation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly box1?: string | null;
  readonly box2?: string | null;
  readonly relation?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Relation = LazyLoading extends LazyLoadingDisabled ? EagerRelation : LazyRelation

export declare const Relation: (new (init: ModelInit<Relation>) => Relation) & {
  copyOf(source: Relation, mutator: (draft: MutableModel<Relation>) => MutableModel<Relation> | void): Relation;
}

type EagerThird = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Third, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly physicalAppearance?: string | null;
  readonly physicalSignal?: (string | null)[] | null;
  readonly socialIdentity?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyThird = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Third, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly physicalAppearance?: string | null;
  readonly physicalSignal?: (string | null)[] | null;
  readonly socialIdentity?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Third = LazyLoading extends LazyLoadingDisabled ? EagerThird : LazyThird

export declare const Third: (new (init: ModelInit<Third>) => Third) & {
  copyOf(source: Third, mutator: (draft: MutableModel<Third>) => MutableModel<Third> | void): Third;
}

type EagerSecond = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Second, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly physicalAppearance?: (string | null)[] | null;
  readonly physicalSignal?: (string | null)[] | null;
  readonly socialIdentity?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySecond = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Second, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly physicalAppearance?: (string | null)[] | null;
  readonly physicalSignal?: (string | null)[] | null;
  readonly socialIdentity?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Second = LazyLoading extends LazyLoadingDisabled ? EagerSecond : LazySecond

export declare const Second: (new (init: ModelInit<Second>) => Second) & {
  copyOf(source: Second, mutator: (draft: MutableModel<Second>) => MutableModel<Second> | void): Second;
}

type EagerPerson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Person, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image: string;
  readonly boxColour: string;
  readonly physicalSignal?: string | null;
  readonly socialIdentity?: string | null;
  readonly emotion: string;
  readonly socialRelation?: string | null;
  readonly interaction?: string | null;
  readonly environment?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPerson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Person, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image: string;
  readonly boxColour: string;
  readonly physicalSignal?: string | null;
  readonly socialIdentity?: string | null;
  readonly emotion: string;
  readonly socialRelation?: string | null;
  readonly interaction?: string | null;
  readonly environment?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Person = LazyLoading extends LazyLoadingDisabled ? EagerPerson : LazyPerson

export declare const Person: (new (init: ModelInit<Person>) => Person) & {
  copyOf(source: Person, mutator: (draft: MutableModel<Person>) => MutableModel<Person> | void): Person;
}

type EagerImageEntity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ImageEntity, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly physicalAppearance?: (string | null)[] | null;
  readonly physicalSignal?: (string | null)[] | null;
  readonly socialIdentity?: (string | null)[] | null;
  readonly emotion?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyImageEntity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ImageEntity, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly physicalAppearance?: (string | null)[] | null;
  readonly physicalSignal?: (string | null)[] | null;
  readonly socialIdentity?: (string | null)[] | null;
  readonly emotion?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ImageEntity = LazyLoading extends LazyLoadingDisabled ? EagerImageEntity : LazyImageEntity

export declare const ImageEntity: (new (init: ModelInit<ImageEntity>) => ImageEntity) & {
  copyOf(source: ImageEntity, mutator: (draft: MutableModel<ImageEntity>) => MutableModel<ImageEntity> | void): ImageEntity;
}

type EagerEntity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Entity, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly physicalAppearance?: (string | null)[] | null;
  readonly physicalSignal?: (string | null)[] | null;
  readonly socialIdentity?: (string | null)[] | null;
  readonly emotion?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEntity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Entity, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly physicalAppearance?: (string | null)[] | null;
  readonly physicalSignal?: (string | null)[] | null;
  readonly socialIdentity?: (string | null)[] | null;
  readonly emotion?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Entity = LazyLoading extends LazyLoadingDisabled ? EagerEntity : LazyEntity

export declare const Entity: (new (init: ModelInit<Entity>) => Entity) & {
  copyOf(source: Entity, mutator: (draft: MutableModel<Entity>) => MutableModel<Entity> | void): Entity;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly boundingBoxNum?: number | null;
  readonly etag?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly boundingBoxNum?: number | null;
  readonly etag?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}