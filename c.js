var cmds ={
    commands:{
        "/help": function(socket){
            
        },
        "/op": function(socket){
                if(cmds.types[dTypes[cmds.username]]>=2&&cmds.types[dTypes[cmds.cmd[1]]]<=1){
                   dTypes[cmds.cmd[1]]="mod";
                   socket.broadcast.emit('modManagement', cmds.cmd, true, encrypt("mod")); socket.emit('modManagement', cmds.cmd, true, encrypt("mod"));
                   save("all");
                }else{
                    socket.emit('alert', 'action can not be completed');
                }
        },
        "/deop": function(socket){
            if(cmds.types[dTypes[cmds.username]]>=2&&cmds.types[dTypes[cmds.cmd[1]]]<cmds.types[dTypes[cmds.username]]){
                dTypes[cmds.cmd[1]]="regular";
                save("all");
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
            
            if(cmds.cmd[1]=="color"&&cmds.types[dTypes[cmds.username]]>=2&&cmds.cmd[2]=="o"){
                myColor[cmds.cmd[3]]=cmds.cmd[4];
                socket.emit('alert', 'you just changed their color to: '+cmds.cmd[4]);
            }else
            if(cmds.cmd[1]=="color"&&colors[cmds.username][cmds.cmd[2]]){
                myColor[cmds.username]=cmds.cmd[2]; socket.emit('alert', 'your color was set to: '+cmds.cmd[2]);
                console.log(myColor[cmds.username]);
            }else if(cmds.cmd[1]=="type"&&dTypes[cmds.types[cmds.username]]>=3&&dTypes[cmds.type[cmds.cmd[2]]]<=2){
                
            }else{
                socket.emit('alert', 'action could not be completed: command parameters');
                socket.emit('alert', 'commands: ');
                socket.emit('alert', '/set color [color]');
                socket.emit('alert', '/set type [type]');
                socket.emit('alert', 'you need to own the item first try /buy');
            }
            exports.myColor = myColor;
            exports.colors = colors;
            database.write("saved_colors.json", JSON.stringify(myColor));
        },
        "/buy": function(socket){
            if(cmds.cmd[1]=="color"&&money[cmds.username]>=2000){
                colors[cmds.username][cmds.cmd[2]]=true;
                money-=2000;
                exports.money = money;
                database.write("bets/money.json", JSON.stringify(money));
                database.write("colors.json", JSON.stringify(colors));
                database.write("saved_colors.json", JSON.stringify(colors));
            }
        },
        "/sell": function(socket){
            if(cmds.cmd[1]=="color"&&colors[cmds.username][cmds.cmd[2]]){
                colors[cmds.username][cmds.cmd[2]]=false;
                money=Math.round(money)+2000;
            }else{
                socket.emit('alert', 'could not complete action here are the commands:)');
                socket.emit('alert', '/sell color [color]');
            }
        },
        "/balance": function(socket){
            
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
            console.log("command: "+cmds.cmd);
        }else{
            return false;
        }
    }
}



exports.cmds = {};
exports.cmds = cmds;
exports.cmds.processMsg = cmds.processMsg;
exports.commands = cmds.commands;
