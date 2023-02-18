const mineflayer = require('mineflayer')

var nomer = "5";

var admin = "UzFine";
var admin2 = "LAZIZBEK";

var password = "lazizbek2008";

let time = new Date()



var kovlash = `dig${nomer}`;
var stop = `stop${nomer}`;
var username = `LAZIZBEK_MINER${nomer}`;

const bot = mineflayer.createBot({
    host: 'ir.skyblock.uz',
    port: 25566,
    version: 1.18,
    username: username, 
})


bot.on('messagestr', (message) => {
    console.log(message)



    if (message.includes("/register")) {
        bot.chat(`/register ${password} ${password}`)  
    }


    
    if (message.includes("/login")) {
        bot.chat(`/login ${password}`)
    }
})

async function dig() {
    if (!bot.heldItem || !bot.heldItem.name.includes('pickaxe')) {
        var pickaxe = bot.inventory.items().filter(i => i.name.includes('pickaxe')) [0];
        if (pickaxe) await bot.equip(pickaxe, 'hand') 
        if (!pickaxe) bot.quit();
    }
    var block = bot.blockAtCursor(7);
    if (!block) return setTimeout(function () {
        dig();
    }, 100);
    await bot.dig(block, 'ignore', 'raycast')
    dig()
}


bot.on('chat', async (username, message) => {

    if (username == `${admin}`)
        switch (message) {

        case `tpa${nomer}`:
        bot.chat(`/tpa ${admin}`)
    }
})


bot.on('chat', async (username, message) => {

    if (username == `${admin2}`)
        switch (message) {

        case `come${nomer}`:
        bot.chat(`/tpa ${admin2}`)
    }
})



bot.on('chat', async (username, message) => {
    if (username == `${admin}`)
        switch (message) {

            case `${kovlash}`:
            bot.chat(`/msg ${admin} Starting...`);
                dig()
                break

            case `${stop}`:
        bot.chat(`/msg ${admin} Stopping...`);

        bot.stopdig();

        break;

        }
})




bot.on('chat', async (username, message) => {
    if (username == `${admin2}`)
        switch (message) {

            case `${kovlash}`:
            bot.chat(`/msg ${admin2} Starting...`);
                dig()
                break

            case `${stop}`:
        bot.chat(`/msg ${admin2} Stopping...`);

        bot.stopdig();

        break;

        }
})




bot.on('chat',function (username, message){
    if(username === 'botjs') return;

    if(message === 'exit' && username === 'LAZIZBEK'){
        bot.quit()
    }
})




bot.on('chat',function (username, message){
    
    if (message === "drop"){
        function tossNext(){
    
    if(bot.inventory.items().length === 3000) {
    
        bot.chat('У меня пусто')
    
    } else {
    
        const item = bot.inventory.items()[3000]
    
        bot.tossStack(item,tossNext)}
    
    }
    
    tossNext()}
    
    });








/*



bot.on('chat', (username, message) => {
    if (username === `${admin}`) {
        if (message.indexOf(`#${nomer}`) !== -1) {
            var replacement = `#${nomer}`,
                toReplace = "",
                str = message

            str = str.replace(replacement, toReplace)
            bot.chat(str)
        }
    }
})

bot.on('chat', (username, message) => {
    if (username === `${admin2}`) {
        if (message.indexOf(`#${nomer}`) !== -1) {
            var replacement = `#${nomer}`,
                toReplace = "",
                str = message

            str = str.replace(replacement, toReplace)
            bot.chat(str)
        }
    }
})






bot.once("spawn", () => {
      setTimeout(() => {
        bot.chat(`/register ${password} ${password}`)
        bot.chat(`/login ${password}`)
      }, 500)
})

*/