var app ={
    commands:{
        "/help": function(socket, data, cmd, stringc){
            
        },
        "/clear": function(socket, data, cmd, stringc){
            socket.broadcast.emit('cmd', cmd, stringc); socket.emit('cmd', cmd, stringc);
        },
        "/op": function(socket, data, cmd, stringc){
                if(app.types[dTypes[data.name]]>=2&&app.types[dTypes[cmd[1]]]<=1){
                   dTypes[cmd[1]]="mod";
                }else{
                    socket.emit('alert', 'action can not be completed');
                }
        },
        "/deop": function(socket, data, cmd, stringc){
            if(app.types[dTypes[data.name]]>=2&&app.types[dTypes[cmd[1]]]<app.types[dTypes[data.name]]){
                dTypes[cmd[1]]="regular";
            }else{
                socket.emit('alert', 'action can be completed');
            }
        }
    },
    types: { "regular": 0, "mod": 1, "admin":2, "owner":3}
}
