require('dotenv').config()

const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.token.toString();

const prefix1 = "&";
const prefix2 = "&&";

bot.on("ready", () => {

    console.log("SpongeBot is online.");

});

bot.on("message", msg => {

    //let args = msg.content.substring(prefix.length).split(" ");

    var croppedMsg;
    var croppedMsgReverse;



    if (msg.content.charAt(0) === prefix2) {

        croppedMsgReverse = msg.content.substring(1).toLowerCase();

        msg.delete();

        msg.channel.send(croppedMsgReverse);


    } else if (msg.content.charAt(0) === prefix1) {

        croppedMsg = msg.content.substring(1);

        var msgArray = new Array(croppedMsg.length);

        for (var i = 0; i < croppedMsg.length; i++) {

            if (Math.random() >= 0.5) {

                msgArray[i] = croppedMsg.toString().charAt(i).toUpperCase();

            } else {
                msgArray[i] = croppedMsg.toString().charAt(i);
            }


        }

        var outputMsg = msgArray.join('');

        msg.delete();

        msg.channel.send(outputMsg.toString());

    }


});

bot.login(token);