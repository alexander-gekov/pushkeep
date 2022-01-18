/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChannel = /* GraphQL */ `
  subscription OnCreateChannel {
    onCreateChannel {
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
export const onUpdateChannel = /* GraphQL */ `
  subscription OnUpdateChannel {
    onUpdateChannel {
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
export const onDeleteChannel = /* GraphQL */ `
  subscription OnDeleteChannel {
    onDeleteChannel {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateChannelMessage = /* GraphQL */ `
  subscription OnCreateChannelMessage {
    onCreateChannelMessage {
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
export const onUpdateChannelMessage = /* GraphQL */ `
  subscription OnUpdateChannelMessage {
    onUpdateChannelMessage {
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
export const onDeleteChannelMessage = /* GraphQL */ `
  subscription OnDeleteChannelMessage {
    onDeleteChannelMessage {
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
