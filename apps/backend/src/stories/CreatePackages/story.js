require('dotenv').config();

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : process.env.DB_HOST,
    user : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME
  }
});
const prepare = ({ reqQuery, reqBody, reqParams }) => {
  // console.log("check for the payload", reqBody);
  return reqBody;
};

const authorize = ({ prepareResult }) => {
  

  return true;
};

const handle = async ({ prepareResult, storyName }) => {

  console.log("check for the payload", prepareResult);  
//  console.log("check for the payload", packageName, packageDescription);
  
  const packageName = prepareResult.name;
  const packageDescription = prepareResult.description;

  if (!packageName || !packageDescription) {
    throw new Error('Package name or description is missing');
  }

  await knex('fav_table').insert({
    name: packageName,
    description: packageDescription
  });

 
  return {
    result: "Create Packages",
    packageName,
    packageDescription
  };
};

const respond = ({ handleResult }) => {
  return handleResult;
};

module.exports = {
  prepare,
  authorize,
  handle,
  respond,
};
