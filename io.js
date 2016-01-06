/**
 * @brief [brief description]
 * @details [long description]
 *
 * @param  [description]
 * @return [description]
 */
module.exports = function(server, lcd) {
    "use strict";
    var io = require('socket.io')(server);
    io.sockets.on('connection', function(socket) {
        socket.on('packet', function(buffer) {
          setTimeout(function(e){
            var a = [];
            var c = 0;
            for(var i = 0; i < 16; i++){
              var b = 0
              for(var j = 0 ; j < 4 ; j++)
                b += buffer[c++];
              a.push(b);
            }
            var max = Math.max.apply(null, a);
            var str = ["", ""];
            a.forEach(function(e){
              if(e > 0.5 * max){
                str[0] += "|";
                str[1] += "|";
              }
              else if(e > 0.33 * max){
                str[0] += " ";
                str[1] += "|";
              }
              else {
                str[0] += " ";
                str[1] += " ";
              }
            });
            [0,1].forEach(function(i){
              lcd.setCursor(0,i);
              lcd.print(str[i]);
            });
          }, 150);

        });
    });
}
