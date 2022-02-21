 

const { CoffeeLava } = require("lavacoffee"); 

 const client = require(".."); 

  

 const manager = new CoffeeLava({ 

   balanceLoad: "lavalink", 

   send(id, payload) { 

     let guild = client.guilds.cache.get(id); 

     guild.shard.send(payload); 

   }, 

   // autoPlay: false, 

   // autoReplay: true, 

   // autoResume: true, 

 }); 

  

 // addingg lavalink 

 manager.add({ 

   name: "LAVA_NODE", 

   url: "node03.lavalink.eu:2333", 

   password: "Raccoon", 

   secure: false, 

   retryAmount: 5, 

   retryDelay: 3000, 

 }); 

  

 module.exports = manager;