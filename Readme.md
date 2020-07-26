# Deno Mock Server

## Start server  
`deno run --unstable --allow-net --allow-read --allow-write denomocker.ts start`

### --args
##### --project= - specify server cache scope(default value = `default`)
##### --port= - specify port for http server

## Clean cache
`deno run --unstable --allow-write denomocker.ts clean`

### --args
##### --project= - specify cache scope to clean(default value = `default`)

## Help
`deno run denomocker.ts help`


# How it works

#### `routes.json` - config for your mock server.
#### keys - routes(GET, POST, DELETE)
#### count - count of randomly generated entities
#### model - your mock data fields(available types - `string, number, boolean`)

#### string properties has `size` - (`word` or `sentence`)

### `--project` - cache folder prefix

## Example

`deno run --unstable --allow-net --allow-read --allow-write denomocker.ts start --project=test`
### Config(`routes.json`)
This means 20 randomly generated objects with 3 properties(name, description, age)
```json
{
   "people": {
     "count": 20,
     "model": [
       {
         "name": "name",
         "type": "string",
         "size": "word"
       },
       {
         "name": "description",
         "type": "string",
         "size": "sentence"
       },
       {
         "name": "age",
         "type": "number"
       }
     ]
   }
}
```

#### Available routes
````
localhost:8000/people
localhost:8000/people/:id
````

#### Available http methods
````
GET, POST, DELETE
````

## NOTE:
Random generation will create content only one time for each project's route.
To re-generate content you must clean project cache.
Cache will be available until cleaning. All data mutations will apply to cache files on your file system
