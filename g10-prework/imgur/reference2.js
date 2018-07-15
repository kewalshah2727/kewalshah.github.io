{
					"name": "Image",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{accessToken}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://api.imgur.com/3/account/{{username}}/image/{{imageId}}",
							"protocol": "https",
							"host": [
								"api",
								"imgur",
								"com"
							],
							"path": [
								"3",
								"account",
								"{{username}}",
								"image",
								"{{imageId}}"
							]
						},
						"description": "Return information about a specific image. This endpoint works the same as the [Image Endpoint](https://api.imgur.com/endpoints/image/). You can use any of the additional actions that the image endpoint with this endpoint.\n\n#### Response Model: [Image](https://api.imgur.com/models/image)"

						
						
						
						
						
						
this.askImgur = function(req, res) {
  var img_data;
  console.log('askImgur function firing');
  var search_term = url.parse(req.originalUrl||req.path).query;
  console.log(search_term);
  var search_path = path + search_term;//PLUS PAGE

  var options = {
    protocol: "https:",
    host:'api.imgur.com',
    path:search_path,
    method:'GET',
    headers: {
    "Authorization":"Client-ID 808d48c81739a8d"
    }
  };

var ds;
  https.get(options, function(res) {
    console.log("Got response: " + res.statusCode);
    for (var key in res) {
      if (res.hasOwnProperty(key)) {
      console.log(key);
      }
    }
  }).on('data', function(chunk){
    ds+=chunk;
    console.log("chunk is "+chunk);//does nothing
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
  console.log("ds is "+ds);//does nothing
  //res.json("askImgur function is sending you words");
  res.send(search_term);
};//askImgur function