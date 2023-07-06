const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  // OWNER ID
  name: { type: String
},
description: { type: String
},
price: { type: String
},
isDraft: { type: Boolean
},
  img: { type: String 
},
ownerID: { type: String
},
  quantity: { type: String
 },
});
module.exports = mongoose.model("products", ProductSchema);
