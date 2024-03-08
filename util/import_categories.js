
const elasticsearch = require('elasticsearch');
const peliasConfig = require('pelias-config').generate();
const _ = require('lodash');
const fs = require('fs');
const yaml = require('yaml');

const esclient = elasticsearch.Client(_.extend({}, peliasConfig.esclient));

async function main() {

  const indexName = "categories";
  const indexBody = {
    "settings": {
      "analysis": {
        "normalizer": {
          "my_custom_normalizer": {
            "type": "custom",
            "filter": ["lowercase"] // Ensures case-insensitivity
          }
        }
      }
    },
    "mappings": {
      "properties": {
        "keywords": {
          "type": "keyword",
          "normalizer": "my_custom_normalizer"
        }
      }
    }
  }
  const variants = './config/variants.yml'; // Path to your YAML file

  try {
    const del = await esclient.indices.delete({
      index: indexName
    });

    console.log("deleted: ", del);
  } catch (error) {
    if (error.statusCode === 404) {
        console.log(`Index "${indexName}" not found.`);
    } else {
        console.error(`Error deleting index "${indexName}":`, error);
        throw new Error(`Error deleting index "${indexName}":`, error);
    }
  }

  try{
    const cre = await esclient.indices.create({
      index: indexName,
      body: indexBody
    });

    console.log("created: ", cre);

  } catch (error) {
    console.error(`Error creating index "${indexName}":`, error);
    throw new Error(`Error creating index "${indexName}":`, error);
  }

  try {

    console.log('importing pelias categories');

    const file = fs.readFileSync(variants, 'utf8');
    const data = yaml.parse(file);

    for (const [key, value] of Object.entries(data)) {
      // Convert comma-separated values to an array and trim spaces
      const keywordsArray = value.split(',').map(keyword => keyword.trim());

      await esclient.index({
        index: indexName,
        id: key,
        body: {
          keywords: keywordsArray
        }
      });
    }

    console.log('All categories have been imported successfully.');
  } catch (e) {
    console.error("error while importing categories: ", e)
  }


}


main();