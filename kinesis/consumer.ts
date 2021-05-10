import {
  KinesisStreamHandler,
  KinesisStreamRecordPayload,
} from 'aws-lambda';

const consumer: KinesisStreamHandler = async (event) => {
  for (const record of event.Records) {
    const payload: KinesisStreamRecordPayload = record.kinesis;
    const message: string = Buffer.from(payload.data, 'base64').toString();

    console.log('Kinesis message: ' + message);
  }
};

export default consumer;
