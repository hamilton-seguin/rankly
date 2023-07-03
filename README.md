# Serverless Framework AWS NodeJS Example

This template demonstrates how to deploy a NodeJS function running on AWS Lambda using the traditional Serverless Framework. The deployed function does not include any event definitions as well as any kind of persistence (database). For more advanced configurations check out the [examples repo](https://github.com/serverless/examples/) which includes integrations with SQS, DynamoDB or examples of functions that are triggered in `cron`-like manner. For details about configuration of specific `events`, please refer to our [documentation](https://www.serverless.com/framework/docs/providers/aws/events/).

## Usage

`https://app.serverless.com/rollingx`

### Deployment

In order to deploy the example, you need to run the following command:

```bash
$ serverless deploy
```

After running deploy, you should see output similar to:

```bash
Deploying rankly to stage dev (eu-central-1)

✔ Service deployed to stack rankly-dev (112s)

dashboard: https://app.serverless.com/rollingx/apps/rankly/rankly/prod/eu-central-1
endpoint: GET - https://*******.execute-api.eu-central-1.amazonaws.com/prod/rank
functions:
  rank: rankly-prod-rank (232 kB)
```

### Invocation

After successful deployment, you can invoke the deployed function by using the following command:

```bash
serverless invoke --function rank
```

Which should result in response similar to the following:

```json
{
    "statusCode": 200,
    "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\",\n  \"input\": {}\n}"
}
```

*!!!* 
But will fail because our function requires a `queryStringParameters`
So to properly test the function, we need to hit the endpoint with a query string parameter

```bash
curl https://*******.execute-api.eu-central-1.amazonaws.com/prod/rank\?rank\=1
```
*!!!*


### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello
```

Which should result in response similar to the following:

```json
{
    "statusCode": 200,
    "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```
