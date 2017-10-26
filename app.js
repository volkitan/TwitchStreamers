const express = require("express"),
      app     = express(),
      fetch   = require("node-fetch");

app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs");



app.get("/", function(req,res){
    let streams = [];
    Promise.all(urls().map(url => {
      fetch(url)
        .then(resp => resp.json())
        .then(data => {
          streams.push(data);
          if(streams.length === urls().length) {
            res.render("index", { data:streams })
          }
        });
    }))
})

function urls() {
  const streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
  "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  let url = "https://wind-bow.gomix.me/twitch-api/channels/";
  return streamers.map(elem => url + elem);
}

app.listen(3000, function() {
    console.log("Server started");
})
