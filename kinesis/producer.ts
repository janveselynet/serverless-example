import { APIGatewayProxyHandler, APIGatewayProxyEvent } from 'aws-lambda';
import { Kinesis } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const STREAM_NAME: string = 'event-stream';

const kinesis = new Kinesis({
  endpoint: 'http://localhost:4567',
  apiVersion: '2013-12-02',
});

const producer: APIGatewayProxyHandler = async (event) => {
  
};

export default producer;
