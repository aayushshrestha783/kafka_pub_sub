const { Kafka } = require("kafkajs");

run();
async function run() {
  try {
    //communicate with the server making tcp connections
    const kafka = new Kafka({
      clientId: "myapp",
      brokers: ["localhost:29092"],
    });
    const admin = kafka.admin();
    console.log("connecting to");
    await admin.connect();
    console.log("connected");
    await admin.createTopics({
      topics: [
        {
          topic: "Users",
          numPartitions: 2,
        },
      ],
    });
    console.log("created Successfully");
    await admin.disconnect();
  } catch (ex) {
    console.error(`erro ${ex}`);
  } finally {
    process.exit(0);
  }
}
