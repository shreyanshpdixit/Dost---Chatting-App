const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
     const r = await axios.put(
      'https://api.chatengine.io/users/',
      {username: username, secret: username, first_name: username},
      {headers: {"private-key": "673dd281-a175-4457-b8c4-254f1c2fe0ca"}}
     )
     return res.status(r.status).json(r.data);
  } catch (e) {
     return res.status(error.response.status).json(error.response.data);
  }
});

app.listen(3001);
