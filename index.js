"use strict";

const emojis = ["😀", "😃", "😄", "😁", "🤪", "🥳", "🚀"];

module.exports.rankHandler = async (event) => {
  const rank = event.queryStringParameters.rank;
  const rankEmoji = emojis[rank >= emojis.length ? emojis.length - 1 : rank];
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: rankEmoji,
      },
      null,
      2
    ),
  };
};
