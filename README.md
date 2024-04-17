# Kafka Pub/Sub

This repository demonstrates a simple implementation of Kafka's publish-subscribe messaging pattern using Node.js. It includes a Docker Compose configuration for setting up a Kafka cluster, along with producer and consumer scripts in Node.js.

## Prerequisites

- Docker
- Node.js
- npm (Node Package Manager)

## Getting Started

1. **Clone this repository:**

   ```
   git clone https://github.com/aayushshrestha783/kafka_pub_sub.git
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Start the Kafka cluster using Docker Compose:**

   ```
   docker-compose up -d
   ```

4. **Create a Kafka topic named "Users" using `topic.js`:**

   ```
   node topic.js
   ```

## Running the Producer

The `producer.js` script sends messages to the "Users" topic. Run the producer script with a message as a command-line argument. For example:

```
node producer.js apple
```

## Running the Consumer

The `consumer.js` script listens for messages on the "Users" topic. Run the consumer script to start consuming messages:

```
node consumer.js
```

The consumer will continuously listen for messages on the "Users" topic and log them to the console.

## Cleaning Up

To stop the Kafka cluster and remove Docker containers:

```
docker-compose down
```

## Troubleshooting

- If you encounter any issues, ensure that Docker and Node.js are properly installed and configured on your system.
- Check the Docker Compose logs for any error messages that may indicate problems with the Kafka cluster.
- Make sure that Kafka is running and accessible before running the producer and consumer scripts.
