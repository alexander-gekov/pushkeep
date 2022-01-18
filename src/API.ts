/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateChannelInput = {
  id?: string | null,
  name: string,
  userID?: string | null,
  _version?: number | null,
};

export type ModelChannelConditionInput = {
  name?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelChannelConditionInput | null > | null,
  or?: Array< ModelChannelConditionInput | null > | null,
  not?: ModelChannelConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Channel = {
  __typename: "Channel",
  id: string,
  name: string,
  Messages?: ModelChannelMessageConnection | null,
  userID?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelChannelMessageConnection = {
  __typename: "ModelChannelMessageConnection",
  items:  Array<ChannelMessage | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ChannelMessage = {
  __typename: "ChannelMessage",
  id: string,
  channelID: string,
  messageID: string,
  channel: Channel,
  message: Message,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Message = {
  __typename: "Message",
  id: string,
  type?: string | null,
  content: string,
  isDeleted?: boolean | null,
  deletedOn?: string | null,
  channels?: ModelChannelMessageConnection | null,
  sender?: User | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  messageSenderId?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  email?: string | null,
  membership?: boolean | null,
  Channels?: ModelChannelConnection | null,
  imageUri?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelChannelConnection = {
  __typename: "ModelChannelConnection",
  items:  Array<Channel | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateChannelInput = {
  id: string,
  name?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeleteChannelInput = {
  id: string,
  _version?: number | null,
};

export type CreateMessageInput = {
  id?: string | null,
  type?: string | null,
  content: string,
  isDeleted?: boolean | null,
  deletedOn?: string | null,
  _version?: number | null,
  messageSenderId?: string | null,
};

export type ModelMessageConditionInput = {
  type?: ModelStringInput | null,
  content?: ModelStringInput | null,
  isDeleted?: ModelBooleanInput | null,
  deletedOn?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
  messageSenderId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateMessageInput = {
  id: string,
  type?: string | null,
  content?: string | null,
  isDeleted?: boolean | null,
  deletedOn?: string | null,
  _version?: number | null,
  messageSenderId?: string | null,
};

export type DeleteMessageInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email?: string | null,
  membership?: boolean | null,
  imageUri?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  membership?: ModelBooleanInput | null,
  imageUri?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  membership?: boolean | null,
  imageUri?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateChannelMessageInput = {
  id?: string | null,
  channelID: string,
  messageID: string,
  _version?: number | null,
};

export type ModelChannelMessageConditionInput = {
  channelID?: ModelIDInput | null,
  messageID?: ModelIDInput | null,
  and?: Array< ModelChannelMessageConditionInput | null > | null,
  or?: Array< ModelChannelMessageConditionInput | null > | null,
  not?: ModelChannelMessageConditionInput | null,
};

export type UpdateChannelMessageInput = {
  id: string,
  channelID?: string | null,
  messageID?: string | null,
  _version?: number | null,
};

export type DeleteChannelMessageInput = {
  id: string,
  _version?: number | null,
};

export type ModelChannelFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelChannelFilterInput | null > | null,
  or?: Array< ModelChannelFilterInput | null > | null,
  not?: ModelChannelFilterInput | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  content?: ModelStringInput | null,
  isDeleted?: ModelBooleanInput | null,
  deletedOn?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
  messageSenderId?: ModelIDInput | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  membership?: ModelBooleanInput | null,
  imageUri?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelChannelMessageFilterInput = {
  id?: ModelIDInput | null,
  channelID?: ModelIDInput | null,
  messageID?: ModelIDInput | null,
  and?: Array< ModelChannelMessageFilterInput | null > | null,
  or?: Array< ModelChannelMessageFilterInput | null > | null,
  not?: ModelChannelMessageFilterInput | null,
};

export type CreateChannelMutationVariables = {
  input: CreateChannelInput,
  condition?: ModelChannelConditionInput | null,
};

export type CreateChannelMutation = {
  createChannel?:  {
    __typename: "Channel",
    id: string,
    name: string,
    Messages?:  {
      __typename: "ModelChannelMessageConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateChannelMutationVariables = {
  input: UpdateChannelInput,
  condition?: ModelChannelConditionInput | null,
};

export type UpdateChannelMutation = {
  updateChannel?:  {
    __typename: "Channel",
    id: string,
    name: string,
    Messages?:  {
      __typename: "ModelChannelMessageConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteChannelMutationVariables = {
  input: DeleteChannelInput,
  condition?: ModelChannelConditionInput | null,
};

export type DeleteChannelMutation = {
  deleteChannel?:  {
    __typename: "Channel",
    id: string,
    name: string,
    Messages?:  {
      __typename: "ModelChannelMessageConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    type?: string | null,
    content: string,
    isDeleted?: boolean | null,
    deletedOn?: string | null,
    channels?:  {
      __typename: "ModelChannelMessageConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sender?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      membership?: boolean | null,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    messageSenderId?: string | null,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    type?: string | null,
    content: string,
    isDeleted?: boolean | null,
    deletedOn?: string | null,
    channels?:  {
      __typename: "ModelChannelMessageConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sender?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      membership?: boolean | null,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    messageSenderId?: string | null,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    type?: string | null,
    content: string,
    isDeleted?: boolean | null,
    deletedOn?: string | null,
    channels?:  {
      __typename: "ModelChannelMessageConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sender?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      membership?: boolean | null,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    messageSenderId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email?: string | null,
    membership?: boolean | null,
    Channels?:  {
      __typename: "ModelChannelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email?: string | null,
    membership?: boolean | null,
    Channels?:  {
      __typename: "ModelChannelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email?: string | null,
    membership?: boolean | null,
    Channels?:  {
      __typename: "ModelChannelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateChannelMessageMutationVariables = {
  input: CreateChannelMessageInput,
  condition?: ModelChannelMessageConditionInput | null,
};

export type CreateChannelMessageMutation = {
  createChannelMessage?:  {
    __typename: "ChannelMessage",
    id: string,
    channelID: string,
    messageID: string,
    channel:  {
      __typename: "Channel",
      id: string,
      name: string,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    message:  {
      __typename: "Message",
      id: string,
      type?: string | null,
      content: string,
      isDeleted?: boolean | null,
      deletedOn?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      messageSenderId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateChannelMessageMutationVariables = {
  input: UpdateChannelMessageInput,
  condition?: ModelChannelMessageConditionInput | null,
};

export type UpdateChannelMessageMutation = {
  updateChannelMessage?:  {
    __typename: "ChannelMessage",
    id: string,
    channelID: string,
    messageID: string,
    channel:  {
      __typename: "Channel",
      id: string,
      name: string,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    message:  {
      __typename: "Message",
      id: string,
      type?: string | null,
      content: string,
      isDeleted?: boolean | null,
      deletedOn?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      messageSenderId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteChannelMessageMutationVariables = {
  input: DeleteChannelMessageInput,
  condition?: ModelChannelMessageConditionInput | null,
};

export type DeleteChannelMessageMutation = {
  deleteChannelMessage?:  {
    __typename: "ChannelMessage",
    id: string,
    channelID: string,
    messageID: string,
    channel:  {
      __typename: "Channel",
      id: string,
      name: string,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    message:  {
      __typename: "Message",
      id: string,
      type?: string | null,
      content: string,
      isDeleted?: boolean | null,
      deletedOn?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      messageSenderId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetChannelQueryVariables = {
  id: string,
};

export type GetChannelQuery = {
  getChannel?:  {
    __typename: "Channel",
    id: string,
    name: string,
    Messages?:  {
      __typename: "ModelChannelMessageConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListChannelsQueryVariables = {
  filter?: ModelChannelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChannelsQuery = {
  listChannels?:  {
    __typename: "ModelChannelConnection",
    items:  Array< {
      __typename: "Channel",
      id: string,
      name: string,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncChannelsQueryVariables = {
  filter?: ModelChannelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncChannelsQuery = {
  syncChannels?:  {
    __typename: "ModelChannelConnection",
    items:  Array< {
      __typename: "Channel",
      id: string,
      name: string,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    type?: string | null,
    content: string,
    isDeleted?: boolean | null,
    deletedOn?: string | null,
    channels?:  {
      __typename: "ModelChannelMessageConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sender?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      membership?: boolean | null,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    messageSenderId?: string | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      type?: string | null,
      content: string,
      isDeleted?: boolean | null,
      deletedOn?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      messageSenderId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMessagesQuery = {
  syncMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      type?: string | null,
      content: string,
      isDeleted?: boolean | null,
      deletedOn?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      messageSenderId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email?: string | null,
    membership?: boolean | null,
    Channels?:  {
      __typename: "ModelChannelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      membership?: boolean | null,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      membership?: boolean | null,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetChannelMessageQueryVariables = {
  id: string,
};

export type GetChannelMessageQuery = {
  getChannelMessage?:  {
    __typename: "ChannelMessage",
    id: string,
    channelID: string,
    messageID: string,
    channel:  {
      __typename: "Channel",
      id: string,
      name: string,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    message:  {
      __typename: "Message",
      id: string,
      type?: string | null,
      content: string,
      isDeleted?: boolean | null,
      deletedOn?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      messageSenderId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListChannelMessagesQueryVariables = {
  filter?: ModelChannelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChannelMessagesQuery = {
  listChannelMessages?:  {
    __typename: "ModelChannelMessageConnection",
    items:  Array< {
      __typename: "ChannelMessage",
      id: string,
      channelID: string,
      messageID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncChannelMessagesQueryVariables = {
  filter?: ModelChannelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncChannelMessagesQuery = {
  syncChannelMessages?:  {
    __typename: "ModelChannelMessageConnection",
    items:  Array< {
      __typename: "ChannelMessage",
      id: string,
      channelID: string,
      messageID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateChannelSubscription = {
  onCreateChannel?:  {
    __typename: "Channel",
    id: string,
    name: string,
    Messages?:  {
      __typename: "ModelChannelMessageConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateChannelSubscription = {
  onUpdateChannel?:  {
    __typename: "Channel",
    id: string,
    name: string,
    Messages?:  {
      __typename: "ModelChannelMessageConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteChannelSubscription = {
  onDeleteChannel?:  {
    __typename: "Channel",
    id: string,
    name: string,
    Messages?:  {
      __typename: "ModelChannelMessageConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    type?: string | null,
    content: string,
    isDeleted?: boolean | null,
    deletedOn?: string | null,
    channels?:  {
      __typename: "ModelChannelMessageConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sender?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      membership?: boolean | null,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    messageSenderId?: string | null,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    type?: string | null,
    content: string,
    isDeleted?: boolean | null,
    deletedOn?: string | null,
    channels?:  {
      __typename: "ModelChannelMessageConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sender?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      membership?: boolean | null,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    messageSenderId?: string | null,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    type?: string | null,
    content: string,
    isDeleted?: boolean | null,
    deletedOn?: string | null,
    channels?:  {
      __typename: "ModelChannelMessageConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sender?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      membership?: boolean | null,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    messageSenderId?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email?: string | null,
    membership?: boolean | null,
    Channels?:  {
      __typename: "ModelChannelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email?: string | null,
    membership?: boolean | null,
    Channels?:  {
      __typename: "ModelChannelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email?: string | null,
    membership?: boolean | null,
    Channels?:  {
      __typename: "ModelChannelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateChannelMessageSubscription = {
  onCreateChannelMessage?:  {
    __typename: "ChannelMessage",
    id: string,
    channelID: string,
    messageID: string,
    channel:  {
      __typename: "Channel",
      id: string,
      name: string,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    message:  {
      __typename: "Message",
      id: string,
      type?: string | null,
      content: string,
      isDeleted?: boolean | null,
      deletedOn?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      messageSenderId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateChannelMessageSubscription = {
  onUpdateChannelMessage?:  {
    __typename: "ChannelMessage",
    id: string,
    channelID: string,
    messageID: string,
    channel:  {
      __typename: "Channel",
      id: string,
      name: string,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    message:  {
      __typename: "Message",
      id: string,
      type?: string | null,
      content: string,
      isDeleted?: boolean | null,
      deletedOn?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      messageSenderId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteChannelMessageSubscription = {
  onDeleteChannelMessage?:  {
    __typename: "ChannelMessage",
    id: string,
    channelID: string,
    messageID: string,
    channel:  {
      __typename: "Channel",
      id: string,
      name: string,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    message:  {
      __typename: "Message",
      id: string,
      type?: string | null,
      content: string,
      isDeleted?: boolean | null,
      deletedOn?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      messageSenderId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
