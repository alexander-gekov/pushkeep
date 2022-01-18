exports.handler = (event, context, callback) => {
  // insert code to be executed by your lambda trigger
  callback(null, event);
};
const aws = require("aws-sdk");
const ddb = new aws.DynamoDB.DocumentClient({ region: "eu-central-1" });

exports.handler = async (event, context) => {
  if (!event?.request?.userAttributes?.sub) {
    console.log("No sub provided");
    context.done(null, event);
    return;
  }

  let tableName = process.env.USERTABLE;

  const now = new Date();
  const timestamp = now.getTime();

  const userItem = {
    id: event.request.userAttributes.sub,
    __typename: "User",
    _lastChangedAt: timestamp,
    _version: 1,
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
    name: event.request.userAttributes.name,
    email: event.request.userAttributes.email,
    imageUri: event.request.userAttributes.picture,
    membership: false,
  };

  const params = {
    Item: userItem,
    TableName: tableName,
  };

  try {
    await ddb.put(params).promise();
    console.log("Sucess");
  } catch (e) {
    console.log(e);
    console.log(tableName);
  }
};
