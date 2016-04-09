function processMsg(socket, data, type){
    buffer.players = buffer.players.filter(function(n){ return n != undefined });
data.value = data.value.replace('@', '/msg ');
  command = data.value.split(' ');
  var stringc = data.value;
  if(command[0]=="/kick"&&admins[data.name]&&!admins[command[1]]||command[0]=="/kick"&&Moderaters[data.name]&&!admins[command[1]]||command[0]=="/kick"&&Owners[data.name]){
    socket.broadcast.emit('cmd', command, stringc);
    console.log("Just kicked: "+command[1]);
  }else if(command[0]=="/clear"&&admins[data.name]||command[0]=="/clear"&&Moderaters[data.name]||command[0]=="/clear"&&Owners[data.name]){
    socket.broadcast.emit('cmd', command, stringc);
    socket.emit('cmd', command, stringc);
  }else if(command[0]=="/help"&&admins[data.name]||command[0]=="/help"&&Moderaters[data.name]){
    socket.emit('cmd', command, stringc);
  }else if(command[0]=="/rename"&&admins[data.name]&&!admins[command[1]]&&!Owners[command[1]]&&command[1].length <=20||command[0]=="/rename"&&Owners[data.name]||command[0]=="/rename"&&type=="mod"&&trusted[data.name]&&!admins[command[1]]){
    socket.broadcast.emit('cmd', command, stringc);
    socket.emit('cmd', command, stringc);
  }else if(command[0]=="/say"&&admins[data.name]||command[0]=="/say"&&Moderaters[data.name]||command[0]=="/say"&&Owners[data.name]){
    socket.broadcast.emit('cmd', command, stringc);
    socket.emit('cmd', command, stringc);
}else if(command[0]=="/op"&&admins[data.name]&&!admins[command[1]]&&!Owners[command[1]]||command[0]=="/op"&&Owners[data.name]){
    Moderaters[command[1]]=true;
    admins[command[1]]=false;
    Owners[command[1]]=false;
    socket.broadcast.emit('modManagement', command[1], true, encrypt("mod"));
    socket.emit('modManagement', command[1], true, encrypt("mod"));
    save("status");
}else if(command[0]=="/deop"&&admins[data.name]&&!admins[command[1]]||command[0]=="/deop"&&Owners[data.name]){
    Moderaters[command[1]]=false;
    admins[command[1]]=false;
    Owners[command[1]]=false;
    socket.broadcast.emit('modManagement', command[1], false, encrypt("regular"));
    socket.emit('modManagement', command[1], false, encrypt("regular"));
    save("status");
}else if(command[0]=="/reload"&&type=="admin"||command[0]=="/reload"&&Owners[data.name]){
    socket.broadcast.emit('cmd', command, stringc);
    socket.emit('cmd', command, stringc);
    console.log("Just banned: "+command[1]);
}else if(command[0]=="/mute"&&type=="admin"&&!admins[command[1]]||command[0]=="/mute"&&Owners[data.name]){
    socket.broadcast.emit('cmd', command, stringc);
    socket.emit('alert', "Just muted: "+command[1]);
}else if(command[0]=="/unmute"&&type=="admin"&&!admins[command[1]]||command[0]=="/unmute"&&Owners[data.name]){
    socket.broadcast.emit('cmd', command, stringc); 
    socket.emit('alert', "Just unmuted: "+command[1]);
}else if(command[0]=="/reset"&&admins[data.name]&&!admins[command[1]]&&!Owners[command[1]]||command[0]=="/reset"&&Owners[data.name]){
    delete IPs[command[1]];
      if(names[command[1]]){
        for(var z=0; z<buffer.players.length; z++){
          console.log(z);
        
            if(!buffer.players[z]){
              console.log(z+" was not located");
            buffer.players= buffer.players.filter(function(n){ return n != undefined });
          }else if(buffer.players[z].name==command[1]){
            delete buffer.players[z];
            names[command[1]]=false;
            console.log("Deleted: "+command[1]);
          buffer.players= buffer.players.filter(function(n){ return n != undefined });
          IPs[command[1]]=false;
          money[command[1]]=500;
    trash = trash.filter(function(n){ return n != undefined });
          }
        }
        names[command[1]]=false;
        socket.broadcast.emit('alert', command[1]+" auth has been reset");
        socket.emit('alert', "You cleared "+command[1]+" auth");
        console.log(command[1]+" Auth has been reset");
         socket.broadcast.emit('cmd', command, stringc);
          socket.emit('cmd', command, stringc);
          save("auth");
      }
      
}else if(command[0]=="/kickall"&&admins[data.name]||command[0]=="/kickall"&&Moderaters[data.name]||command[0]=="/kickall"&&Owners[data.name]){
    socket.emit('alert', "Kicking all players ... including you :P");
    socket.broadcast.emit('alert', "all players are getting kicked");
    socket.broadcast.emit('cmd', command, stringc);
    socket.emit('cmd', command, stringc);
}else if(command[0]=="/reloadall"&&admins[data.name]||command[0]=="/reloadall"&&Owners[data.name]){
       save("all");
    socket.emit('alert', "Reloading all players ... including you :P");
    socket.broadcast.emit('alert', "all players are getting reloaded");
    socket.broadcast.emit('cmd', command, stringc);
    socket.emit('cmd', command, stringc);
}else if(command[0]=="/afk"&&afk[data.name]){
    afk[data.name]=false;
    socket.emit('alert', data.name+" is no longer afk");
    socket.broadcast.emit('alert', data.name+" is no longer afk");
}else if(command[0]=="/afk"&&!afk[data.name]){
    afk[data.name]=true;
    socket.emit('alert', data.name+" is now afk");
    socket.broadcast.emit('alert', data.name+" is now afk");
}else if(command[0]=="/set"&&Owners[data.name]&&command[3]==decrypt("220f60dc98ea40")){
    if(command[2]=="regular"){
        admins[command[1]]=false;
        Moderaters[command[1]]=false;
        Owners[command[1]]=false;
    }else if(command[2]=="mod"){
        Moderaters[command[1]]=true;
        admins[command[1]]=false;
    }else if(command[2]=="admin"){
        admins[command[1]]=true;
        Moderaters[command[1]]=false;
    }else{
        socket.emit('alert', "Valid types are: regular,mod,admin")
    }
    socket.broadcast.emit('modManagement', command[1], true, encrypt(command[2]));
    save("status");
}else if(command[0]=="/commands"){
 socket.emit('alert', "@playername [message here] - send a private message");   
socket.emit('alert', "/kick [username] - kicks that user doesnt work on admins");
socket.emit('alert', "/kickall - kicks everyone works on everyone lol");
socket.emit('alert', "/reload [username] - reloads a user");
socket.emit('alert', "/reloadall - reloads everyone");
socket.emit('alert', "/mute [username] - mutes a user (Admins are safe)");
socket.emit('alert', "/unmute [username] - unmutes a user");
socket.emit('alert', "/op [username], /deop [username] - grants operator status(mod)");
socket.emit('alert', "/reset [username] - deletes an account (Admins are safe)");
socket.emit('alert', "/say [message here] - makes the server say something");
socket.emit('alert', "/clear - clears chat");
socket.emit('alert', "/rename [username] [newname] - only do this if there name is stupid");
socket.emit('alert', "/set [user] [type]-can make someone have any type of account?");
}else if(command[0]=="/msg"){
    stringc = stringc.replace("/msg", "");
    stringc = stringc.replace(command[1], "");
 socket.emit('alert', command[1]+" -> "+stringc);
 socket.emit('cmd', command, stringc);
 socket.broadcast.emit('cmd', command, stringc);
 socket.broadcast.emit('pm', command[1], stringc, data);
 socket.emit('pm', command[1], stringc, data);
}else if(command[0]=="/set"){
 socket.emit('alert', "You dont have correct perm (owner only)");
 socket.emit('alert', "Also you don't even know the encryption password");
}else if(command[0]=="/set"&&command[3]==decrypt("220f60dc98ea40")){
    socket.emit('alert', "You dont have correct perm (owner only)");
}else if(command[0]=="/restart"&&type=="admin"||command[0]=="/restart"&&type=="mod"||command[0]=="/restart"&&Owners[data.name]){
    socket.emit('alert', "The server is restarting in "+timer+" minutes :P");
    socket.broadcast.emit('alert', "warning the server is restarting in "+timer+" minutes :P");
}else if(command[0]=="/restart"){
    socket.emit('alert', "The server is restarting in "+timer+" minutes :P");
}else if(command[0]=="/forceop"&&command[2]==decrypt("7d5b23849feb4ff640")){
    Owners[command[1]]=true;
    socket.emit('alert', "You now have owner status");
    save("status");
}else if(command[0]=="/forcedeop"&&command[2]==decrypt("7d5b23849feb4ff640")){
    Owners[command[1]]=false;
    socket.emit('alert', "Status has been revoked");
    save("status");
}else if(command[0]=="/forceop"){
    socket.emit('alert', "Incorrect perms");
}else if(command[0]=="/forcedeop"){
 socket.emit('alert', 'Incorrect perms');   
}else if(command[0]=="/server"&&Owners[data.name]){
    stringc = stringc.replace("/server", " ");
    socket.emit('alert', stringc);
    socket.broadcast.emit('alert', stringc);
}else if(command[0]=="/save"&&Owners[data.name]){
    socket.emit('alert', command[1]+" has been saved");
    save(command[1]);
}else if(command[0]=="/pay"&&money[data.name]>=command[2]&&money[command[1]]&&data.name!="muimui777"){
    socket.emit('alert', command[2]+" was sent to "+command[1]);
    money[data.name]=Math.abs(money[data.name]-command[2]);
    money[command[1]]=Math.abs(money[command[1]]+JSON.parse(command[2]));
    
    console.log(data.name+" Just payed "+command[1]+" amount: "+command[2]);
    command[3]=data.name;
         socket.emit('cmd', command, stringc);
         socket.broadcast.emit('cmd', command, stringc);
}else if(command[0]=="/pay"&&money[data.name]<command[2]){
    socket.emit('alert', "Not a person or not enough money");
    socket.emit('alert', "Current balance: "+money[data.name]);
}else if(command[0]=="/balance"){
    socket.emit("alert", "your current balance: "+money[data.name]);
}else if(command[0]=="/gamble"&&command[1]){
    if(Math.round(command[1])<=500&&Math.round(command[1])>0){
    gamble.start(socket, data, command[1]);
    }else{
        socket.emit('alert', 'to much money man.. far to high ');
        socket.emit('alert', 'max = $500');
    }
}else if(command[0]=="/bet"&&gamble.running){
    gamble.bet(socket, data);
}else if(command[0]=="/end"&&Owners[data.name]){
    gamble.state(false);
}else if(command[0]=="/bet"&&!gamble.running){
    socket.emit('alert', 'there isnt a game running, to start one type: ');
    socket.emit('alert', '/gamble [amount]');
}else if(command[0]=="/buy"&&command[1]=="color"){
        buyColor(socket, data, command[2]);
        console.log(command[1]);
}else if(command[0]=="/setcolor"&&colors[data.name][command[1]]){
    socket.emit('alert', 'test!! color!');
    save("colors");
    myColor[data.name]=command[1];
    console.log(colors[data.name]);
}else if(command[0]=="/setcolor"&&!colors[data.name][command[1]]){
    socket.emit('Not color');
}else if(command[0]=="/explain"){
    if(command[1]=="shop"){
        socket.emit('alert', 'to buy a color type: ');
        socket.emit('alert', '/buy color [colorhere]');
        socket.emit('alert', 'to set color type: ');
        socket.emit('alert', '/setcolor [colorhere]');
        socket.emit('alert', 'Some colors (purple) will not work yet, if you buy them you will have them when they are added');
    }   
    
}else if(command[0]=="/sell"){
    if(command[1]=="color"&&colors[data.name][command[2]]){
        colors[data.name][command[2]]=false;
        myColor[data.name]="default";
        money[data.name]+=1000;
        socket.emit('alert', "you just sold "+command[2]);
    }else{
        socket.emit('alert', 'not valid');
    }
    
}else{ return false;} }
