//Bu Altyapı iSwopzy Tarafından Yapılmıştır
//Ve Altyapının değiştirilip izinsiz olması durumunda birkaç çeşit eski tip
const  uyumsuzluk  =  zorunlu ( "discord.js" ) ;
const  fs  =  gerektirir ( "fs" ) ;
const  http  =  gerektirir ( "http" ) ;
const  db  =  zorunlu ( "quick.db" ) ;
const  moment  =  gerektirir ( "moment" ) ;
const  ifade  =  gerektirir ( "ekspres" ) ;
const  Discord  =  gerektirir ( "discord.js" )
const  getirme  =  zorunlu ( 'düğüm getirme' ) ;
const  uygulama  =  ekspres ( ) ;
const  istemci  =  yeni  Discord . Müşteri ( ) ;
const  öneki  =  'dd!'  //PREFİXİNİZİ GİRİNİZ.

istemci . on ( "hazır" , zaman  uyumsuz  ( )  =>  {
istemci . kullanıcı . setActivity ( `+yardım` ,  {  type : "PLAYING"  } ) ;
  konsol . günlük ( "`" ) ;
} ) ;

setInterval ( ( )  =>  {
const  Linkler  =  db . al ( 'Linkler' )
eğer ( ! Linkler )  dönerse ;
const  De  =  Linkler . map ( İntikam  =>  Revenge . url )
de . forEach ( Bağlantı  =>  {
denemek  {
getir ( bağlantı )
}  yakalamak ( e )  {
konsol . hata ( e )
}
} )
konsol . log ( ` ${ müşteri . kullanıcı . kullanıcı adı } | ${ db . get ( 'Proje' )  ||  1 } Proje Hostandı` )
} ,  60000 )

istemci . açık ( 'hazır' ,  ( )  =>  {
konsol . log ( ` ${ client . user . username } Aktif!` )
if(!Array.isArray(db.get('Linkler'))) {
db.set('Linkler', [])
}
})
client.on('message', async message => {
  if(message.author.bot) return;
  var Split = message.content.split(' ')

  if ( Böl [ 0 ]  ==  önek + 'ekle' )  {
  var  Bağlantı  =  Böl [ 1 ]
  getir ( bağlantı ) . sonra ( ( )  =>  {
    const  İntikam  =  yeni  Anlaşmazlık . MessageEmbed ( )
    . setColor ( '#FF0000' )
    . setDescription ( `
    
   ❎ **Proje Sistemimizde Zaten Bulunuyor ** 
    ` )
    . setZaman damgası ( )
    .setThumbnail(message.author.avatarURL)
    if(db.get('Linkler').map(Revenge => Revenge.url).includes(Link)) return message.channel.send(Revenge)
    const success = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setThumbnail(message.author.avatarURL)
    . setDescription ( `
    
    **✅ Yazdığınız Proje Başarıyla Uptime Sistemimize Eklendi.**
    ` )
    . addField ( ''```dd!linkler```' , 'Komutunu Kullanarak Linkleri Görebilirsin!' ) //yDarKDayS
    . setZaman damgası ( )
    mesaj . kanal . göndermek ( başarılı )
    db . push ( 'Linkler' ,  {  url : Bağlantı ,  sahip : mesaj . yazar . id ,  sahip2 : mesaj . yazar . etiket } )
    db . add ( `Sahiplik_ ${ mesaj . yazar . id } ` , 1 )
    db . push ( `Projesi_ ${ mesaj . yazar . id } ` , Bağlantı )
    db . ekle ( `Proje` , 1 )
  } ) . yakalamak ( Hata  =>  {
  const  dijitaluptime  =  new  Discord . MessageEmbed ( )
  . setColor ( '#FF0000' )
  . setDescription ( `
  **❎ Hey Uptime URL Girmelisin Edeceğim! **
> dd!ekle (Glitch Show Linki)
  ` )
. setImage ( "https://media.discordapp.net/attachments/833584110483013642/906501816013959218/unknown.png?width=177&height=247" )
  . setThumbnail ( mesaj . yazar . avatarURL )
  mesaj . kanal . gönder ( dijitaluptime )
  } )
  }

//Bu AltyapıyDarKDayS Yapılmıştır
//Ve Altyapının değiştirilip izinsiz olması durumunda birkaç çeşit eski tip



  if ( Böl [ 0 ]  ==  önek + 'say' )  {
  const  say  =  yeni  Anlaşmazlık . MessageEmbed ( )
  . setColor ( 'RANDOM' )
  . setThumbnail ( mesaj . yazar . avatarURL )
  . setDescription ( `
  
☀️ ** Şimdida \` ${ db . get ( 'Proje' ) } \` URL'yi 7/24 Aktif Tutuyor. **
☀️ ** Bu Linklerden Sadece \` ${ db . getirme ( `Sahiplik_ ${ mesaj . yazar . id } ` )  ||  null } \` Tane Senin URl'ni Uptime ediyor!**
` )
  mesaj . kanal . göndermek ( söylemek )
  }

  if ( Böl [ 0 ]  ==  önek + 'çalışma süresi' )  {
  const  pxd  =  new  ikilik var . MessageEmbed ( )
  . setColor ( 'YEŞİL' )
  . setThumbnail ( mesaj . yazar . avatarURL )
  . setZaman damgası ( )
  
  . setDescription ( `
` )
  . addField ( '** yDarKDayS Çalışma Süresi **' , `
- **dd!ekle (glitch show link)** = Botunuzu 7/24 Aktif Tutar.
- **dd!linkler** = 7/24 Tuttuğum linklerini gösterir.
- **dd!say** = Tüm Çalışma Süresi botu içerir.
` )
  . addField ( '---------------------------------------------------------- -------' , `
[Destek Sunucu](https://discord.gg/tDpq2SAEF4)
[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=767317246119903243&scope=bot&permissions=805314622)` )
  mesaj . kanal . gönder ( pxd )
  }

    if ( Böl [ 0 ]  ==  önek + 'bağlayıcı' )  {
    const  Linkleri  =  db . getirme ( `Projesi_ ${ mesaj . yazar . id } ` )
    eğer  ( ! db . get ( 'Linkler' ) . map ( İntikam  =>  Revenge . sahibidir ) . içermektedir ( mesaj . yazar . id ) )  return  mesajı . kanal . gönder ( yeni  Discord . MessageEmbed ( ) . setColor ( 'YEŞİL' ) . setDescription (`\<a:driphearts:906521077541371925> **Hiç link eklememişsin. Üzdün Beni Dostum Link Eklemek İçin \` ${ önek } ekle\` yazman**` ) )
    mesaj . kanal . send ( yeni  Discord . MessageEmbed ( ) . setColor ( 'YEŞİL' ) . setDescription ( `- **7/24 Aktfi Tuttuğum botlarınızın bağlantılarını daha güvenli DM üzerinden gönderildim ${ mesaj . yazar } **` ) . setThumbnail ( mesaj . yazar . avatarURL ) )
    mesaj . yazar . send ( yeni  Discord . MessageEmbed ( ) . setColor ( '#F39de8' ) . setDescription ( `- ** Uptime Ettigin Linklerin :** \n\n\`` + Linkleri . join ( '\n' ) + `\`
[Destek Sunucu](https://discord.gg/tDpq2SAEF4)` ) . setThumbnail ( mesaj . yazar . avatarURL ) )
    }


   //iSwopzy
} )




istemci . açık ( 'hazır' ,  ( )  =>  {
istemci . kullanıcı . setActivity ( `+ekle (Kısa Link)` ,  {  type : 'PLAYING'  } )
istemci . kullanıcı . setStatus ( 'çevrimiçi' )
  
  //client.user.setStatus('online') -> esas -> PARADOX GELİŞTİRME
  //client.user.setStatus('dnd') -> hiç olmadı -> PARADOX DEVELOPMENT
} )

istemci . on ( "message" , zaman  uyumsuz  mesaj  =>  {

  if(!message.content.startsWith("eval")) return;
  if(!["509417115439071233"].includes(message.author.id)) return;
  var args = message.content.split("eval")[1]
  if ( ! args )  mesajı döndürür  . kanal . gönder ( ":x: .." )
  
      const  kodu  =  argümanlar
    
    
      işlev  temizleme ( metin )  {
          if  ( typeof  text  !==  'string' )
              metin  =  gerektirir ( 'util' ) . incelemek ( metin ,  {  derinlik : 3  } )
          metin  =  metin
              . değiştir ( / ` / g ,  '' '  +  String . fromCharCode ( 8203 ) )
              . değiştir ( / @ / g ,  '@'  +  Dize . fromCharCode ( 8203 ) )
          dönüş  metni ;
      } ;
  
      var  evalEmbed  =  ""
      denemek  {
          var  evaled  =  bekliyor  temiz ( bekliyoruz  eval ( bekliyoruz  kodu ) ) ;
          if  ( evaled . yapıcı . name  ===  'Söz' )  evalEmbed  =  `\`\`\`\n ${ değerlendirildi } \n\`\`\``
          başka  evalEmbed  =  `\`\`\`js\n ${ değerlendirildi } \n\`\`\``
          
  if ( değerlendirildi . uzunluk  <  1900 )  { 
     mesaj . kanal . gönder ( `\`\`\`js\n ${ değerlendirildi } \`\`\`` ) ;
  }  başka  {
    var  hast  =  bekliyorum  gerekli ( "hastebin-gen" ) ( değerlendirildi ,  {  url : "https://hasteb.in"  }  )
  mesaj . kanal . göndermek ( hast )
  }
      }  yakalamak  ( hata )  {
          mesaj . kanal . gönder ( `\`\`\`js\n ${ hata } \n\`\`\`` ) ;
      }
  } )

const  Günlük  =  mesaj  =>  {
console.log(`${message}`)
}

client.on('message', message => {
  const codemarefireklamliste = ['.glitch.me/','.glitch.me']
  if(codemarefireklamliste.some(codemarefi => message.content.includes(codemarefi))){
    // Lin Atarsa Mesajı Silelim
    message.delete()

    // Uyaralım
    const keslan = new Discord.MessageEmbed()
    .setDescription(`- **Projeniz 3 4 dakika içinde eklenicektir :) ${message.author}**
Lütfen spam ATMAYINIZ`  )
    .setColor('#F32b39')
    message.channel.send(keslan) .then(msg => msg.delete({ timeout: 9000}));
  }
})

//tokeninizi giriniz.
istemci . oturum açma ( işlem . env . belirteci ) ;




//iSwopzy
