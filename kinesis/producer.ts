import { APIGatewayProxyHandler } from 'aws-lambda';
import { Kinesis } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const STREAM_NAME: string = 'event-stream';

const kinesis = new Kinesis({
  endpoint: 'http://localhost:4567',
  apiVersion: '2013-12-02',
});

const producer: APIGatewayProxyHandler = async (event) => {
  await kinesis.putRecord({
    StreamName: STREAM_NAME,
    Data: event.body,
    PartitionKey: uuidv4(),
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Message was successfully pushed to Kinesis',
    }),
  };
};

export default producer;
