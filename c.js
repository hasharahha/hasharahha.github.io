var cmds ={
    commands:{
        "/help": function(socket){
            
        },
        "/op": function(socket){
                if(cmds.types[dTypes[cmds.username]]>=2&&cmds.types[dTypes[cmds.cmd[1]]]<=1){
                   dTypes[cmds.cmd[1]]="mod";
                   socket.broadcast.emit('modManagement', cmds.cmd, true, encrypt("mod")); socket.emit('modManagement', cmds.cmd, true, encrypt("mod"));
                }else{
                    socket.emit('alert', 'action can not be completed');
                }
        },
        "/deop": function(socket){
            if(cmds.types[dTypes[cmds.username]]>=2&&cmds.types[dTypes[cmds.cmd[1]]]<cmds.types[dTypes[cmds.username]]){
                dTypes[cmds.cmd[1]]="regular";
            }else{
                socket.emit('alert', 'action can not be completed');
            }
        },
        "/clear": function(socket){
            console.log("/clear");
            console.log("Level: "+Math.round(cmds.types[dTypes[cmds.username]]));
            if(Math.round(cmds.types[dTypes[cmds.username]])>=1){
                 socket.broadcast.emit('cmd', cmds.cmd, cmds.stringc); socket.emit('cmd', cmds.cmd, cmds.stringc);
                 console.log("works!");
            }else{
                socket.emit('alert', 'action can not be completed');
            }
        },
        "/reloadall": function(socket){
            save("all"); socket.emit('alert', "Reloading all players ... including you :P"); socket.broadcast.emit('alert', "all players are getting reloaded"); socket.broadcast.emit('cmd', cmds.cmd, cmds.stringc); socket.emit('cmd', cmds.cmd, cmds.stringc);
        },
        "/set": function(socket){
            if(cmds.cmd[1]=="color"&&colors[cmds.username][cmds.cmd[2]]){
                myColor[cmds.username]=cmds.cmd[2]; socket.emit('alert', 'your color was set to: '+cmds.cmd[2]);
            }else if(cmds.cmd[1]=="type"&&dTypes[cmds.types[cmds.username]]>=3&&dTypes[cmds.type[cmds.cmd[2]]]<=2){
                
            }else{
                socket.emit('alert', 'action can not be completed');
            }
            
        
        }
    },
    types: { "regular": 0, "mod": 1, "admin":2, "owner":3, "god":4},
    cmd:[],
    stringc:"",
    username:"",
    processMsg: function(socket, data, type){
        
        cmds.stringc = data.value; cmds.cmd = data.value.split(' '); cmds.username = data.name;
        if(cmds.commands[cmds.cmd[0]]){
            cmds.commands[cmds.cmd[0]](socket);
            console.log("command: "+cmds.command);
        }else{
            return false;
        }
    }
}



exports.cmds = {};
exports.cmds = cmds;
exports.cmds.processMsg = cmds.processMsg;
exports.commands = cmds.commands;
