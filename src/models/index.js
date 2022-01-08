// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Channel, Message, User, ChannelMessage } = initSchema(schema);

export {
  Channel,
  Message,
  User,
  ChannelMessage
};