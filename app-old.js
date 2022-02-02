
const http = require( 'http' );

http.createServer( ( req, res ) =>{

    //res.writeHead(200, { 'Contet-Type': 'text/plain' });

    res.write('Hola Mundo');
    res.end();

})
.listen( 8080 );

console.log( 'puerto 8080' );
