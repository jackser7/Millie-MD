const fs = require('fs')
const Asena = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const jid = Config.DISBGM !== false ? Config.DISBGM.split(',') : [];
const afn = Config.PLKS !== false ? Config.PLKS.split(',') : [];
const Language = require('../language');
const Lang = Language.getString('filters');


Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
    
if (Config.GEAR == 'one') {  
    
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if(Config.BGMFILTER){
            var uri = encodeURI(match[1])
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '918281370025@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.MENTION) {
await message.client.sendMessage(message.jid, fs.readFileSync('uploads/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted : message.data, ptt: true})
        }
        
const array = ['.mp3','.bot','kozhitharam','babe','moodesh','.mp4','master','op','music','sheri','insta',',night,',Avengers','pro','jocker','venom','link ta','puva','madavan unni','ylnt','yLNT Jack','shakkir bhai','JACK SER MESS','Don','endha da','king','lisa','no girls only frnds','theri','stop','biscuit','ara','thantha','ippo','adipoli','psycho','oo','und','illaa','nahi','girls illaallo','poko','💞','smile','lvr','nee etha','single bro','error','🙃','muthee','thayoli','setup','pm mee','romance','committed Avan thalpariyam undo','nanbans','da','chunkee','ada','mm','okay','mask','love bgm','school','jacky','U again','revange','ok bye','boss','chettan ahnn','may i come in',' jack ser mass bomber','nee kannapi','nookate','rentry','mass entry','baby','kerala','police','mandan','chaya','free fire','rank','enmy','first','slow','fight','🔥','💥','ridox','ringtone','.menu','yep','ok','dii','girl','malayali','black','single','bgm5','single ano','sed','Jack','uyir','kalla','kozhi','pm','nallavan','va','bro','jack ser poli ahnn','reply','vazha','njan killadi','name','Jack ettan','Jack ser mass','fell in love','sexy','noob','sed bgm','nee kanjav','tentaction','aniyan kutta','dance','🥲','jack mask kotta','alive,',aniyan ahnn ketto','powersh','poda','jack,mask,trax,ridox','nee killadi ahnalo','chavan','old','rip','.menu','group','killi','vazha','pottan','love','sed','place','jack','sorry','MASK','Mass','kanjav','GUD MRNG','PRANTHAN','Kozhi,vazha','bot','ayoo','breakup','🥵','😡','😹','😁','coming','mood','amma','🥰😘😍🌧️❤️','aliya','poda','kannapi','song','ayin','fan','chunk','bgm2','.mp3','kalyanam','cool','full fans','aysheri','istam','Hi','killadi','bgm3','love']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
    if (Config.GEAR == 'two') {    
    Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {   
        if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '919072790587@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./Amalserv2/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, contextInfo: { forwardingScore: 5, isForwarded: true }, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.MENTION) {
await message.client.sendMessage(message.jid, fs.readFileSync('Amalserv2/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted : message.data, ptt: true})
        }
        var uri = encodeURI(match[1])
const array = ['.mp3','.bot','kozhitharam','babe','moodesh','.mp4','master','op','music','sheri','insta',',night,',Avengers','pro','jocker','venom','link ta','puva','madavan unni','ylnt','yLNT Jack','shakkir bhai','JACK SER MESS','Don','endha da','king','lisa','no girls only frnds','theri','stop','biscuit','ara','thantha','ippo','adipoli','psycho','oo','und','illaa','nahi','girls illaallo','poko','💞','smile','lvr','nee etha','single bro','error','🙃','muthee','thayoli','setup','pm mee','romance','committed Avan thalpariyam undo','nanbans','da','chunkee','ada','mm','okay','mask','love bgm','school','jacky','U again','revange','ok bye','boss','chettan ahnn','may i come in',' jack ser mass bomber','nee kannapi','nookate','rentry','mass entry','baby','kerala','police','mandan','chaya','free fire','rank','enmy','first','slow','fight','🔥','💥','ridox','ringtone','.menu','yep','ok','dii','girl','malayali','black','single','bgm5','single ano','sed','Jack','uyir','kalla','kozhi','pm','nallavan','va','bro','jack ser poli ahnn','reply','vazha','njan killadi','name','Jack ettan','Jack ser mass','fell in love','sexy','noob','sed bgm','nee kanjav','tentaction','aniyan kutta','dance','🥲','jack mask kotta','alive,',aniyan ahnn ketto','powersh','poda','jack,mask,trax,ridox','nee killadi ahnalo','chavan','old','rip','.menu','group','killi','vazha','pottan','love','sed','place','jack','sorry','MASK','Mass','kanjav','GUD MRNG','PRANTHAN','Kozhi,vazha','bot','ayoo','breakup','🥵','😡','😹','😁','coming','mood','amma','🥰😘😍🌧️❤️','aliya','poda','kannapi','song','ayin','fan','chunk','bgm2','.mp3','kalyanam','cool','full fans','aysheri','istam','Hi','killadi','bgm3','love']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./Amalserv2/' + a + '.mp3'), MessageType.audio,{ mimetype: Mimetype.mp4Audio,duration: Config.SAID, ptt: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOT + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./photo/vava.png')}}}});
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    if(Config.STICKERP){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    if (!!message.mention && message.mention[0] == '919744106247@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./jackser7/mention.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted : message.data, ptt: false})
    }
const array = ['.mp3','.bot','kozhitharam','babe','moodesh','.mp4','master','op','music','sheri','insta',',night,',Avengers','pro','jocker','venom','link ta','puva','madavan unni','ylnt','yLNT Jack','shakkir bhai','JACK SER MESS','Don','endha da','king','lisa','no girls only frnds','theri','stop','biscuit','ara','thantha','ippo','adipoli','psycho','oo','und','illaa','nahi','girls illaallo','poko','💞','smile','lvr','nee etha','single bro','error','🙃','muthee','thayoli','setup','pm mee','romance','committed Avan thalpariyam undo','nanbans','da','chunkee','ada','mm','okay','mask','love bgm','school','jacky','U again','revange','ok bye','boss','chettan ahnn','may i come in',' jack ser mass bomber','nee kannapi','nookate','rentry','mass entry','baby','kerala','police','mandan','chaya','free fire','rank','enmy','first','slow','fight','🔥','💥','ridox','ringtone','.menu','yep','ok','dii','girl','malayali','black','single','bgm5','single ano','sed','Jack','uyir','kalla','kozhi','pm','nallavan','va','bro','jack ser poli ahnn','reply','vazha','njan killadi','name','Jack ettan','Jack ser mass','fell in love','sexy','noob','sed bgm','nee kanjav','tentaction','aniyan kutta','dance','🥲','jack mask kotta','alive,',aniyan ahnn ketto','powersh','poda','jack,mask,trax,ridox','nee killadi ahnalo','chavan','old','rip','.menu','group','killi','vazha','pottan','love','sed','place','jack','sorry','MASK','Mass','kanjav','GUD MRNG','PRANTHAN','Kozhi,vazha','bot','ayoo','breakup','🥵','😡','😹','😁','coming','mood','amma','🥰😘😍🌧️❤️','aliya','poda','kannapi','song','ayin','fan','chunk','bgm2','.mp3','kalyanam','cool','full fans','aysheri','istam','Hi','killadi','bgm3','love']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
   await message.client.sendMessage(message.jid, fs.readFileSync('./jackser7/' + a + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false})
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
        if (pattern.test(message.message)) {
            await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
        }
    }
);
}));
    
    async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
 
Asena.addCommand({on: 'text', fromMe: false,onlyGroup: true}, (async (message, match) => {

    if(Config.THERI_KICK){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    
const array = afn 
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
        var us = await checkUsAdmin(message)
        var im = await checkImAdmin(message)
        if (!im) return;
        if (us) return;
await message.client.sendMessage(message.jid,Lang.KICK, MessageType.text, {quoted: message.data });  
await message.client.groupRemove(message.jid, [message.data.participant]);                
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
    }
);
}));
 Asena.addCommand({on: 'text', fromMe: false, onlyPm: true}, (async (message, match) => {

    if(Config.PLKS){
const array = afnp 
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){          
await message.client.sendMessage(message.jid,Lang.KICK2, MessageType.text, {quoted: message.data });               
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
    }
);
}));
