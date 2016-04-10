    
function encrypt(text){ var cipher = crypto.createCipher(algorithm,password); var crypted = cipher.update(text,'utf8','hex'); crypted += cipher.final('hex'); return crypted; }
function decrypt(text){ var decipher = crypto.createDecipher(algorithm,password); var dec = decipher.update(text,'hex','utf8'); dec += decipher.final('utf8'); return dec; }

var colors=database.read("colors.json");
var myColor =database.read("saved_colors.json");
var money =database.read("bets/money.json");
 function save(cmd){

        if(cmd=="all"){
    database.write("status/dtypes.json", JSON.stringify(dTypes));
        }else if(cmd=="status"){

        }else if(cmd=="auth"){
    database.write("status/dtypes.json", JSON.stringify(dTypes));
        }else if(cmd=="money"){

        }else if(cmd=="colors"){

        }else{
            console.log("Unable to save group: "+cmd);
            
        }
}

var gamble = {
    start: function(socket, data, max){
        if(money[data.name]>=Math.round(max)&&!this.running){
            money[data.name]-=Math.round(max);
            this.seconds = Math.pow(1, 1000);
            this.max =Math.round(max);
            this.data = data;
            this.winner = Math.floor(Math.random()*7);
            this.pot=this.max;
            this.running =true;
            this.buffer[data.name]={};
            this.buffer[data.name].roll=Math.floor(Math.random()*7);
            socket.broadcast.emit('alert', 'if you roll a '+this.winner+' you get all the money in the pot!!!');
            socket.emit('alert', 'roll a '+this.winner+' and you get all the money in the pot');
            socket.emit('alert', 'you just entered your gamble');
            socket.broadcast.emit('alert', data.name+' has just entered the game');
            socket.emit('alert', 'type /bet to roll again');
            socket.broadcast.emit('alert', 'type /bet to roll again');
            socket.emit('alert', 'Entered: '+this.max+'$ and rolled: '+this.buffer[data.name].roll);
            socket.broadcast.emit('alert', data.name+' has entered: '+this.max+'$ and rolled: '+this.buffer[data.name].roll);
              if(this.buffer[data.name].roll==this.winner){
                    socket.emit('Congratulations you won the gamble pot was: '+this.pot+'$');
                    socket.emit(data.name+' has just won with that roll he won '+this.pot+'$');
                    money[data.name]+=this.pot;
                }else{
                    socket.emit('alert', 'you did not win roll again? ^^');
                }
        }else{
            socket.emit('alert', 'There is already a gamble running');
        }
    },
    bet: function(socket, data){
            if(money[data.name]>=Math.round(this.max)){
                money[data.name]-=this.max;
                exports.money = money;
                database.write("bets/money.json", JSON.stringify(money));
                this.pot+=Math.round(this.max);
                this.buffer[data.name]={};
                console.log(JSON.stringify(this.buffer));
                this.buffer[data.name].roll = Math.floor(Math.random()*7);
                socket.emit('alert', 'you just entered into this gamble');
                socket.broadcast.emit('alert', data.name+' has entered: '+this.max+'$ and rolled: '+this.buffer[data.name].roll);
                socket.emit('alert', 'Entered: '+this.max+'$ and rolled: '+this.buffer[data.name].roll);
                if(this.buffer[data.name].roll==this.winner){
                    socket.emit('alert', 'Congratulations you won the gamble pot was: '+this.pot+'$');
                    socket.broadcast.emit('alert', data.name+' has just won with that roll he won '+this.pot+'$');
                    money[data.name]+=this.pot;
                    this.running=false;
                    this.buffer={};
                    exports.money = money;
                    database.write("bets/money.json", JSON.stringify(money));
                }else{
                    socket.emit('alert', 'you did not win roll again? ^^');
                }
                console.log("Pot: "+this.pot)
            }else{
                socket.emit('alert', 'You do not have enough funds to participate');
                socket.broadcast.emit('alert', data.name+' is out of this game he ran out of money now its your chance to steal it all!!!!! you could win: $'+this.pot);
            }
            
    },
    state: function(run){
      this.running=run;
      money["SERVER"]+=Math.round(this.pot);
    },
    buffer: {},
    running:false
};

var cmds ={
    commands:{
        "/help": function(socket, data){
            if(cmds.types[dTypes[cmds.username]]==0){
                socket.emit('alert', 'type: '+dTypes[cmds.username]);
                socket.emit('alert', '/set');
                socket.emit('alert', '/buy');
                socket.emit('alert', '/pay');
                socket.emit('alert', '/msg');
            }
           else if(cmds.types[dTypes[cmds.username]]==1){
                socket.emit('alert', 'type: '+dTypes[cmds.username]);
                socket.emit('alert', '/clear');
                socket.emit('alert', '/say');
                socket.emit('alert', '/set');
                socket.emit('alert', '/buy');
                socket.emit('alert', '/pay');
                socket.emit('alert', '/msg');
            }
           else if(cmds.types[dTypes[cmds.username]]==2){
                socket.emit('alert', 'type: '+dTypes[cmds.username]);
                socket.emit('alert', '/clear');
                socket.emit('alert', '/say');
                socket.emit('alert', '/op [name]');
                socket.emit('alert', '/deop [name]');
                socket.emit('alert', '/kick [name]');
                socket.emit('alert', '/set');
                socket.emit('alert', '/buy');
                socket.emit('alert', '/pay');
                socket.emit('alert', '/msg');
            }
           else if(cmds.types[dTypes[cmds.username]]>=3){
                socket.emit('alert', 'type: '+dTypes[cmds.username]);
                socket.emit('alert', '/clear');
                socket.emit('alert', '/say');
                socket.emit('alert', '/op [name]');
                socket.emit('alert', '/deop [name]');
                socket.emit('alert', '/kick [name]');
                socket.emit('alert', '/set');
                socket.emit('alert', '/buy');
                socket.emit('alert', '/pay');
                socket.emit('alert', '/msg');
            }
            
        },
        "/op": function(socket, data){
                if(cmds.types[dTypes[cmds.username]]>=2&&cmds.types[dTypes[cmds.cmd[1]]]<=1){
                   dTypes[cmds.cmd[1]]="mod";
                   socket.broadcast.emit('modManagement', cmds.cmd, true, encrypt("mod")); socket.emit('modManagement', cmds.cmd, true, encrypt("mod"));
                   save("all");
                }else{
                    socket.emit('alert', 'action can not be completed');
                    socket.emit('alert', 'command: ');
                    socket.emit('alert', '/op [name]');
                }
        },
        "/deop": function(socket, data){
            if(cmds.types[dTypes[cmds.username]]>=2&&cmds.types[dTypes[cmds.cmd[1]]]<cmds.types[dTypes[cmds.username]]){
                dTypes[cmds.cmd[1]]="regular";
                save("all");
            }else{
                socket.emit('alert', 'action can not be completed');
                socket.emit('alert', 'command: ');
                socket.emit('alert', '/deop [name]');
            }
        },
        "/clear": function(socket, data){
            console.log("/clear");
            console.log("Level: "+cmds.types[dTypes[cmds.username]]);
            if(Math.round(cmds.types[dTypes[cmds.username]])>=1){
                 socket.broadcast.emit('cmd', cmds.cmd, cmds.stringc); socket.emit('cmd', cmds.cmd, cmds.stringc);
                 console.log("works!");
            }else{
                socket.emit('alert', 'action can not be completed');
            }
        },
        "/reloadall": function(socket, data){
                if(cmds.types[dTypes[cmds.username]]>=2){
            
            save("all"); socket.emit('alert', "Reloading all players ... including you :P"); socket.broadcast.emit('alert', "all players are getting reloaded"); socket.broadcast.emit('cmd', cmds.cmd, cmds.stringc); socket.emit('cmd', cmds.cmd, cmds.stringc);
                }else{
                    socket.emit('alert', 'action can not be completed');
                }
        },
        "/set": function(socket, data){
            
            if(cmds.cmd[1]=="color"&&cmds.types[dTypes[cmds.username]]>=2&&cmds.cmd[2]=="o"){
                myColor[cmds.cmd[3]]=cmds.cmd[4];
                socket.emit('alert', 'you just changed their color to: '+cmds.cmd[4]);
            }else
            if(cmds.cmd[1]=="color"&&colors[cmds.username][cmds.cmd[2]]){
                myColor[cmds.username]=cmds.cmd[2]; socket.emit('alert', 'your color was set to: '+cmds.cmd[2]);
                console.log(myColor[cmds.username]);
            }else if(cmds.cmd[1]=="type"&&dTypes[cmds.types[cmds.username]]>=3&&dTypes[cmds.type[cmds.cmd[2]]]<=2){
                
            }else if(cmds.types[dTypes[cmds.username]]>=2){
                socket.emit('alert', 'action could not be completed: command parameters');
                socket.emit('alert', '/set color o [name] [color]');
                socket.emit('alert', '/set color [color]');
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
        "/buy": function(socket, data){
            if(cmds.cmd[1]=="color"&&money[cmds.username]>=2000){
                colors[cmds.username][cmds.cmd[2]]=true;
                money-=2000;
                exports.money = money;
                database.write("bets/money.json", JSON.stringify(money));
                database.write("colors.json", JSON.stringify(colors));
                database.write("saved_colors.json", JSON.stringify(colors));
            }else{
                socket.emit('action could not be completed: command parameters: ');
                socket.emit('/buy [item] [product]');
                socket.emit('ITEMS: color, PRODUCT: hexORbase(color)');
            }
        },
        "/sell": function(socket, data){
            if(cmds.cmd[1]=="color"&&colors[cmds.username][cmds.cmd[2]]){
                colors[cmds.username][cmds.cmd[2]]=false;
                money=Math.round(money)+2000;
            }else{
                socket.emit('alert', 'could not complete action here are the commands:)');
                socket.emit('alert', '/sell color [color]');
            }
        },
        "/balance": function(socket, data){
            if(money[cmds.username]){
                socket.emit('alert', 'balance: $'+money[cmds.username]);
            }else{
                money[cmds.username]=500;
                socket.emit('alert', 'you were given $500 to start with');
            }
            database.write("bets/money.json", JSON.stringify(money));
        },
        "/pay": function(socket, data){
            if(money[cmds.username]>=Math.round(cmds.cmd[2]+1)&&money[cmds.cmd[1]]){
                money[cmds.username]-=Math.round(cmds.cmd[2]);
                money[cmds.cmd[1]]+=Math.round(cmds.cmd[2]);
                console.log(data.name+" Just payed "+cmds.cmd[1]+" amount: "+cmds.cmd[2]);
                cmds.cmd[3]=data.name;
                socket.emit('cmd', cmds.cmd, cmds.stringc);
                exports.money = money;
                database.write("bets/money.json", JSON.stringify(money));
            }else{
                socket.emit('alert', 'can not complete action');
                socket.emit('alert', '/pay [name]');
            }
            exports.money = money;
            database.write("bets/money.json", JSON.stringify(money));
        },
        "/say": function(socket, data){
                if(cmds.cmd[1]&&cmds.types[dTypes[cmds.username]]>=1){
            socket.broadcast.emit('cmd', cmds.command, cmds.stringc);
            socket.emit('cmd', cmds.cmd, cmds.stringc);
                }else{
                    socket.emit('alert', 'action could not be completed: ');
                    socket.emit('alert', '/say [message here]');
                }
        },
        "/forceop": function(socket, data){
                if(cmds.cmd[2]==decrypt("7d5b23849feb4ff640")){
                    dTypes[cmds.cmd[1]]="owner";
                }else{
                    socket.emit('alert', 'action could not be complted: ');
                    socket.emit('alert', '/forceop [name] [password]');
                } 
        },
        "/forcedeop": function(socket, data){
                if(cmds.cmd[2]==decrypt("7d5b23849feb4ff640")){
                    dTypes[cmds.cmd[1]]="regular";
                }else{
                    socket.emit('alert', 'action could not be complted: ');
                    socket.emit('alert', '/forceop [name] [password]');
                } 
        },
        "/gamble": function(socket, data){
            if(Math.round(cmds.cmd[1])<=500&&Math.round(cmds.cmd[1])>0){
                gamble.start(socket, data, cmds.cmd[1]);
            }else{
                socket.emit('alert', 'to much money man.. far to high ');
                socket.emit('alert', 'max = $500');
                socket.emit('alert', '/gamble [amount]');
            }
        },
        "/bet": function(socket, data){
            gamble.bet(socket, data);
        },
        "/kick": function(socket, data){
            if(cmds.types[dTypes[cmds.username]]>=2){
                    socket.broadcast.emit('cmd', cmds.cmd, cmds.stringc);
                    console.log("Just kicked: "+cmds.cmd[1]);
            }else{
                socket.emit('alert', 'action could not be completed');
                socket.emit('alert', '/kick [name]');
            }
        },
        "/msg": function(socket, data){
            cmds.stringc = cmds.stringc.replace("/msg", "");
            cmds.stringc = cmds.stringc.replace(cmds.cmd[1], "");
            socket.emit('alert', cmds.cmd[1]+" -> "+cmds.stringc);
            socket.emit('cmd', cmds.cmd, cmds.stringc);
            socket.broadcast.emit('cmd', cmds.cmd, cmds.stringc);
            socket.broadcast.emit('pm', cmds.cmd[1], cmds.stringc, data);
            socket.emit('pm', cmds.cmd[1], cmds.cmd, data);
        }
    },
    types: { "regular": 0, "mod": 1, "admin":2, "owner":3, "god":4},
    cmd:[],
    stringc:"",
    username:"",
    processMsg: function(socket, data, type){
        if(!dTypes[cmds.username]){
            dTypes[cmds.username]="regular";
        }
        cmds.stringc = data.value; cmds.cmd = data.value.split(' '); cmds.username = data.name;
        if(cmds.commands[cmds.cmd[0]]){
            cmds.commands[cmds.cmd[0]](socket, data);
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
