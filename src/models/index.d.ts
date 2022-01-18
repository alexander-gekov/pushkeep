import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ChannelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MessageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChannelMessageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Channel {
  readonly id: string;
  readonly name: string;
  readonly Messages?: (ChannelMessage | null)[];
  readonly userID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Channel, ChannelMetaData>);
  static copyOf(source: Channel, mutator: (draft: MutableModel<Channel, ChannelMetaData>) => MutableModel<Channel, ChannelMetaData> | void): Channel;
}

export declare class Message {
  readonly id: string;
  readonly type?: string;
  readonly content: string;
  readonly isDeleted?: boolean;
  readonly deletedOn?: string;
  readonly channels?: (ChannelMessage | null)[];
  readonly sender?: User;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly messageSenderId?: string;
  constructor(init: ModelInit<Message, MessageMetaData>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message, MessageMetaData>) => MutableModel<Message, MessageMetaData> | void): Message;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly email?: string;
  readonly membership?: boolean;
  readonly Channels?: (Channel | null)[];
  readonly imageUri?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class ChannelMessage {
  readonly id: string;
  readonly channel: Channel;
  readonly message: Message;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ChannelMessage, ChannelMessageMetaData>);
  static copyOf(source: ChannelMessage, mutator: (draft: MutableModel<ChannelMessage, ChannelMessageMetaData>) => MutableModel<ChannelMessage, ChannelMessageMetaData> | void): ChannelMessage;
}