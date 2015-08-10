(function () {
    
    //Change this to your GitHub username so you don't have to modify so many things.
    var fork = "Kevin41043";
		
    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:
         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }
         */

        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon!!!");
                }
            }
        };

        bot.commands.rammusCommand = {
            command: 'rammusmode',  
            rank: 'bouncer', 
            type: 'exact', 
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me This chat is now in Rammus mode, type :nb3ok: to continue.");
                }
            }
        };

var botCreatorIDs = ["3851534", "4105209", "5786782"];

//----------- Sinfuls custom script ----------


        API.chatLog("Now running NightBlueBot extra commands!");

        setTimeout(function () { API.ChatLog("/me NightBlueBot v1.2.2 online!") }, 250);

        cleanASCII = function (a) {
            var b = a.split("&#");
            for (var c = 1; c < b.length; c++) {
                var d = b[c].split(";")[0];
                a = a.replace("&#" + d + ";", String.fromCharCode(d));
            }
            a = a.split('&lt;').join('<').split('&gt;').join('>').split('&amp;').join('&').split('&quot;').join('"').replace(/<(?:.|\n)*?>/gm, '');
            return a;
        };
        function f_chtlggr(data) {
            var str = data.un;
            var ns = str.length;
            var msg = cleanASCII(data.message);
            var log = function () {
                return console.log.apply(
                    console,
                    ['[' + new Date().toISOString().slice(11, -5) + ']'].concat(
                        Array.prototype.slice.call(arguments)
                    )
                );
            };
            switch (data.type) {
                case ("message"):
                    log("(" + data.cid + ") (" + data.uid + ") " + Array(25 - ns).join(" ") + "" + data.un + " : " + msg);
                    break;
                case ("emote"):
                    log("(" + data.cid + ") (" + data.uid + ") " + Array(25 - ns).join(" ") + "" + data.un + " : /me: " + msg);
                    break;
                case ("mention"):
                    log("(" + data.cid + ") (" + data.uid + ") " + Array(25 - ns).join(" ") + "" + data.un + " : " + msg);
                    break;
            }
        }
        API.on(API.CHAT, f_chtlggr);

        function chatHTML(data) {
            if (data.hasClass('message') || data.hasClass('mention') || data.hasClass('emote')) {
                data.find('.timestamp').click(function () {
                    $.ajax({ type: 'delete', url: '/_/chat/' + data.attr('data-cid') });
                });
            }
        }
        var chatObs = new MutationObserver(function (b) { chatHTML($(b[0].addedNodes[0])); });
        chatObs.observe(document.querySelector('#chat-messages'), { childList: true });

        var deletedWords = ['nazi', '/me basicBot v2.3.4 online!', 'basicBot v2.3.4 online!', 'hitler', '[afk]', 'faggot', 'fuck you', '!afkdisable', '!joindisable', 'niggers', 'autojoin is now disabled!', 'autorespond is now disabled!', 'http://pornhub.com', 'http://redtube.com', 'https://i.gyazo.com/a9de700a35debe6c53827e8de05b38d8.png', 'http://gyazo.com/704ed62a509bbe77a97e07c5b57316d8', 'https://i.gyazo.com/a9de700a35debe6c53827e8de05b38d8.jpg', 'https://i.gyazo.com/a9de700a35debe6c53827e8de05b38d8.gif', 'https://i.gyazo.com/a9de700a35debe6c53827e8de05b38d8.jpeg', 'i.gyazo.com/a9de700a35debe6c53827e8de05b38d8.png', 'scatman', 'brbrbrbrbr', 'kkkkkk', 'nahtzee', 'fag', 'natzi', 'natzee', 'natze', 'agor.io', 'http://agor.io', 'www.agor.io', 'https://agor.io'];
        API.on(API.CHAT, function (data) {
            for (var i = 0; i < deletedWords.length; i++) {
                if (data.message.toLowerCase().indexOf(deletedWords[i]) > -1) {
                    $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                    break;
                };
            }
        });

        var autoDeleteImages = ['.jpg', '.gif', '.png', 'invalid tags, try something different', '[image too big]', '[error]'];
        API.on(API.CHAT, function (data) {
            for (var i = 0; i < autoDeleteImages.length; i++) {
                if (data.message.toLowerCase().indexOf(autoDeleteImages[i]) > -1) {
                    setTimeout(function () { $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid }) }, 20000);
                };
            }
        });

        var autoDeleteEta = ['you will reach the booth in approximately'];
        API.on(API.CHAT, function (data) {
            for (var i = 0; i < autoDeleteEta.length; i++) {
                if (data.message.toLowerCase().indexOf(autoDeleteEta[i]) > -1) {
                    setTimeout(function () { $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid }) }, 30000);
                };
            }
        });

        var autoDeleteImagesVar = false;
        var autoDeleteImages = ['.jpg', '.gif', '.png'];
        API.on(API.CHAT, function (data) {
            for (var i = 0; i < autoDeleteImages.length; i++) {
                if (data.message.toLowerCase().indexOf(autoDeleteImages[i]) > -1 && autoDeleteImagesVar) {
                    setTimeout(function () { $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid }) }, 100);
                };
            }
        });

        var lastDJ = null;
        API.on(API.ADVANCE, function (data) {
            lastDJ = data.lastPlay.dj.username;
        });

        var autoSend = false;
        API.on(API.CHAT, function (data) {
            if (autoSend) {
                //Deletes this command message \/
                setInterval(function () { API.sendChat('/me !roulette'); }, 1800000);
            }
        });

        API.on(API.CHAT_COMMAND, function (data) {
            switch (data) {
                case "/autoroulette":
                    autoSend = !autoSend;
                    var isOn = autoSend ? "on" : "off";
                    API.sendChat("The automatic roulette every 30 minutes is now " + isOn + '!');
                    break;
            };
        });
        API.on(API.CHAT, function (data) {
            if (data.message.indexOf("!facebook") == 0) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me Facebook: https://www.facebook.com/Nightblue3LoL")
            };
            if (data.message.indexOf("!twitter") == 0) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me Twitter: https://twitter.com/nightbloo")
            };
            if (data.message.indexOf("!youtube") == 0) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me YouTube: https://www.youtube.com/user/Nightblue3")
            };
            if (data.message.indexOf("!twitch") == 0) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me Twitch: http://www.twitch.tv/nightblue3")
            };
            if (data.message.indexOf("!subs") == 0) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me Subscribers to NightBlue3's Twitch channel get to be resident DJs! You must be level 5 on plug and mention a plug.dj mod in the Twitch chat.")
            };
            if (data.message.indexOf("!managers") == 0) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me Plug.dj managers+ that can make resident DJs: RingofRosie, WeisbergBrett, Pizzasalad, TheKingAtom, and Zeldabelle. Ping them in the Twitch chat!")
            };
            if (data.message.indexOf("!teamspeak") == 0) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me Teamspeak Server for NightBlue3: | ts3.deserte.eu |")
            };
            if (data.message.indexOf("!djhelp") == 0) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me In order to DJ and play a song you must join the wait list by clicking on Join Wait List at the left of the DJ. You gotta be quick if the wait list is full! It will open up for a brief second!")
            };
            if (data.message.indexOf("!subhelp") == 0) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me In order to become a subscriber on plug, you must first be level 3 then go to http://plug.dj/subscribe and purchase a subscription.")
            };
            if (data.message.indexOf("!emotehelp") == 0) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me In order to see the Twitch emotes in chat, you must get the RCS script/extension for plug here: http://rcs.radiant.dj")
            };
            if (data.message.indexOf("!staff") == 0) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me Staff are not connected to Twitch, though some may be the same. Managers+ on plug.dj will choose the staff. Please do not ask to be made staff.")
            };
            if (data.message.indexOf("!emotes") == 0) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me Emote List: https://rcs.radiant.dj/emotes")
            };
            if (data.message.indexOf("!rules") == 0) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me Rules: https://goo.gl/U2fQKe")
            };
            if (data.message.indexOf("!theme") == 0) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me We play EDM (Electronic Dance Music), Trap, Chill, Pop, and... Moist genres here. Other genres have a higher chance of being skipped.")
            };
            if (data.message.indexOf("!nsfw") == 0 && API.getUser(data.uid).role >= 1) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me http://i.imgur.com/0X5f7nL.jpeg")
            };
            if (data.message.indexOf("!extracommands") == 0 && API.getUser(data.uid).role >= 2) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me Extra Commands: !twitch, !facebook, !twitter, !youtube, !teamspeak, !staff, !djhelp, !subhelp, !emotehelp, !emotes, !theme, !shush, !rules, !managers, !rcs, !oplist, !infoskips, !fap, and !nsfw.")
            };
            if (data.message.indexOf("!motdon") == 0 && API.getUser(data.uid).role >= 3) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me !motd The stream is currently online. Check it out here: http://twitch.tv/nightblue3")
            };
            if (data.message.indexOf("!motdoff") == 0 && API.getUser(data.uid).role >= 3) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me !motd The stream is currently offline. You can check it out at 4amPST / 7amEST / 12pmGMT here: http://twitch.tv/nightblue3")
            };
            if (data.message.indexOf("!modcommands") == 0 && API.getUser(data.uid).role >= 3) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me Mod Commands (Manager+): !skipat6, !extracommands, !autolottery, !motdon, and !motdoff")
            };
            if (data.message.indexOf("!specialcommands") == 0 && API.getUser(data.uid).role >= 3) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me Special Commands (Bot runner): /imagedelete and /autoroulette.")
            };
            if (data.message.indexOf("!rawr") == 0 && API.getUser(data.uid).role >= 3) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me RAWWWWWWR!")
            };
            if (data.message.indexOf("!love") == 0 && API.getUser(data.uid).role >= 4) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me :heart::yellow_heart::green_heart::blue_heart::purple_heart::sparkling_heart:")
            };
            if (data.message.indexOf("!rcs") == 0 && API.getUser(data.uid).role >= 1) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me AutoWoot & AutoJoin: https://rcs.radiant.dj/")
            };
            if (data.message.indexOf("!shush") == 0 && API.getUser(data.uid).role >= 1) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me http://i.imgur.com/ScgGcrE.jpeg")
            };
            if (data.message.indexOf("!oplist") == 0 && API.getUser(data.uid).role >= 1) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me Overplayed & Blacklist: https://goo.gl/eQbk2V")
            };
            if (data.message.indexOf("!infoskips") == 0 && API.getUser(data.uid).role >= 1) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat("/me http://i.imgur.com/cEZKiTj.jpeg")
            };
            if (data.message.indexOf("!fap") == 0 && API.getUser(data.uid).role >= 1) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                setTimeout(1000);
                API.sendChat(":nb3gasm: :fapfapfap: :nb3gasm: :fapfapfap: :nb3gasm: :fapfapfap: :nb3gasm: :fapfapfap: :nb3gasm: :fapfapfap: :nb3gasm: :fapfapfap: :nb3gasm: :fapfapfap: :nb3gasm: :fapfapfap: ")
            };
            if (data.message.indexOf("!skipat6") == 0 && API.getUser(data.uid).role >= 3) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                API.sendChat("/me I will be now skipping songs that are longer than 6 minutes when they are 6 minutes through.")
                // timeout in minutes:
                var TIMEOUT = 6

                var _timer
                API.on(API.ADVANCE, function () {
                    var current = API.getMedia()
                    clearTimeout(_timer)
                    _timer = setTimeout(function () {
                        if (API.getMedia().cid === current.cid) {
                            API.moderateForceSkip()
                        }
                    }, (current.duration + TIMEOUT) * 60000)
                })
            }
        })

        API.on(API.CHAT_COMMAND, function (data) {
            switch (data) {
                case "/imagedelete":
                    autoDeleteImagesVar = !autoDeleteImagesVar;
                    var isOn = autoDeleteImagesVar ? "on" : "off";
                    API.chatLog("Automatic Image Delete is now " + isOn);
                    break;
            };
        });

        API.on(API.CHAT, function (data) {
            if (data.message.indexOf("!deletelinks") == 0 && API.getUser(data.uid).role >= 3) {
                //Deletes this command message \/
                $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                for (i in $('#chat-messages').children('[data-cid]').find('a').closest('.cm').each(function () {
                    if (data.message.toLowerCase().indexOf('http://') > -1) {
                        $.ajax({ type: 'delete', url: '/_/chat/' + $(this).attr('data-cid') });
                }
                }));
            }
        })

        /* Had to remove this stuff -- Dazzuh 
if (data.message.indexOf("your song is longer than 6.5 minutes, you need permission to play longer songs.") > -1){
    //Deletes this command message \/
    $.ajax({type: 'DELETE', url: '/_/chat/' + data.cid});
    setTimeout(function(){ API.sendChat('/me !move @' + lastDJ + ' 3'); }, 2500);
};
if (data.message.indexOf("[NB3 used skip.]") == 0){
    //Deletes this command message \/
    $.ajax({type: 'DELETE', url: '/_/chat/' + data.cid});
    setTimeout(function(){ API.sendChat('/me !move @' + lastDJ + ' 3'); }, 2500);
};
if (API.getUser(data.uid).id == 6363341){
    setTimeout(function(){ API.sendChat('/me !move @' + lastDJ + ' 3'); }, 2500);
};
*/

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "Kevin",
        language: "english",
        chatLink: "https://rawgit.com/Kevin41043/basicBot-customization/master/lang/en.json",
//      roomLock: false, // Requires an extension to re-load the script
        startupCap: 1, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: false, // true or false
        autowoot: true,
        smartSkip: true,
        cmdDeletion: true,
        maximumAfk: 120,
        afkRemoval: true,
        maximumDc: 60,
        bouncerPlus: true,
        blacklistEnabled: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: false,
        voteSkipLimit: 10,
        historySkip: true,
        timeGuard: true,
        maximumSongLength: 6.5,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        skipPosition: 3,
        skipReasons: [
            ["theme", "This song does not fit the room theme. "],
            ["op", "This song is on the OP list, The songs on our OP list can be found here: https://goo.gl/eQbk2V"],
            ["history", "This song is in the history. "],
            ["mix", "You played a mix, which is against the rules. "],
            ["sound", "The song you played had bad sound quality or no sound. "],
            ["nsfw", "The song you contained was NSFW (image or sound). "],
            ["unavailable", "The song you played was not available for some users. "],
            ["meh", "The song you played received enough mehs for a skip. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: false,
        motdInterval: 5,
        motd: "Temporary Message of the Day",
        filterChat: true,
        etaRestriction: false,
        welcome: false,
        opLink: "https://goo.gl/eQbk2V",
        rulesLink: null,
        themeLink: null,
        fbLink: null,
        youtubeLink: null,
        website: null,
        intervalMessages: [],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/NSFWlist.json",
            OP: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/OPlist.json",
            BANNED: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/BANNEDlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/Dazzuh/basicBot/master/basicBot.js", extend);

}).call(this);
