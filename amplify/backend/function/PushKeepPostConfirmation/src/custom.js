const aws = require("aws-sdk");
const ddb = new aws.DynamoDB.DocumentClient({ region: "eu-central-1" });

exports.handler = async (event) => {
  if (!event?.request?.userAttributes?.sub) {
    console.log("No sub provided");
    return;
  }

  let tableName = process.env.USERTABLE;

  const now = new Date();
  const timestamp = now.getTime();

  const userItem = {
    __typename: "User",
    __lastChangedAt: timestamp.toString(),
    __version: 1,
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
    id: event.request.userAttributes.sub,
    name: event.request.userAttributes.email,
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
