'use strict';

require('dotenv').config(); 
const axios = require('axios'); 
const express = require('exress'); 
const cors = require('cors');
const PORT = process.env.PORT; 

const app = express(); 
app.use(cors()); 





app.listen(PORT, () => console.log(`listening on ${PORT}`));