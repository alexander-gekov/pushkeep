/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChannel = /* GraphQL */ `
  mutation CreateChannel(
    $input: CreateChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    createChannel(input: $input, condition: $condition) {
      id
      name
      Messages {
        nextToken
        startedAt
      }
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateChannel = /* GraphQL */ `
  mutation UpdateChannel(
    $input: UpdateChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    updateChannel(input: $input, condition: $condition) {
      id
      name
      Messages {
        nextToken
        startedAt
      }
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteChannel = /* GraphQL */ `
  mutation DeleteChannel(
    $input: DeleteChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    deleteChannel(input: $input, condition: $condition) {
      id
      name
      Messages {
        nextToken
        startedAt
      }
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      type
      content
      isDeleted
      deletedOn
      channels {
        nextToken
        startedAt
      }
      sender {
        id
        name
        email
        membership
        imageUri
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      messageSenderId
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      type
      content
      isDeleted
      deletedOn
      channels {
        nextToken
        startedAt
      }
      sender {
        id
        name
        email
        membership
        imageUri
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      messageSenderId
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      type
      content
      isDeleted
      deletedOn
      channels {
        nextToken
        startedAt
      }
      sender {
        id
        name
        email
        membership
        imageUri
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      messageSenderId
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      membership
      Channels {
        nextToken
        startedAt
      }
      imageUri
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      membership
      Channels {
        nextToken
        startedAt
      }
      imageUri
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      membership
      Channels {
        nextToken
        startedAt
      }
      imageUri
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createChannelMessage = /* GraphQL */ `
  mutation CreateChannelMessage(
    $input: CreateChannelMessageInput!
    $condition: ModelChannelMessageConditionInput
  ) {
    createChannelMessage(input: $input, condition: $condition) {
      id
      channelID
      messageID
      channel {
        id
        name
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      message {
        id
        type
        content
        isDeleted
        deletedOn
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        messageSenderId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateChannelMessage = /* GraphQL */ `
  mutation UpdateChannelMessage(
    $input: UpdateChannelMessageInput!
    $condition: ModelChannelMessageConditionInput
  ) {
    updateChannelMessage(input: $input, condition: $condition) {
      id
      channelID
      messageID
      channel {
        id
        name
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      message {
        id
        type
        content
        isDeleted
        deletedOn
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        messageSenderId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteChannelMessage = /* GraphQL */ `
  mutation DeleteChannelMessage(
    $input: DeleteChannelMessageInput!
    $condition: ModelChannelMessageConditionInput
  ) {
    deleteChannelMessage(input: $input, condition: $condition) {
      id
      channelID
      messageID
      channel {
        id
        name
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      message {
        id
        type
        content
        isDeleted
        deletedOn
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        messageSenderId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
