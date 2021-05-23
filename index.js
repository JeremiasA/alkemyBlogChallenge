
const express = require ('express'),
morgan = require ('morgan'),
app = express();


//config
require('dotenv').config();
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.json({
  verify : (req, res, buf, encoding) => {
    try {
      JSON.parse(buf);
      } catch(e) {
        res.status(400).json({message: "Invalid JSON"});
        throw Error('invalid JSON');
      }
    }
  }));
  
  //routes
  const postRoutes =  require('./routes/posts.routes')
  app.use('/api/v1/posts', postRoutes);

  //database connection
require('./database/connection')



//server 
app.listen(app.get('port'), ()=>{
    console.log(`Server waiting connections at port ${app.get('port')}`)
})

