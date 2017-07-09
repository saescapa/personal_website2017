// Glad to see you here! I just wrote this very quickly
// nothing here is code I would wirte.
// If you are interested, find me on GitHub! sam

$(document).ready(function() {
  $(".language").click(function() {
    load($(this).attr('id'))
    $('.chooselanguage').hide()
  })
  $(".enter span").click(function() {
    $(".text").toggleClass("second")
    $(".screen.one").toggleClass("second")
    $(".screen.two").toggleClass("second")
  })
  $(".goback").click(function() {
    $(".text").toggleClass("second")
    $(".screen.one").toggleClass("second")
    $(".screen.two").toggleClass("second")
  })
  $(".image").click(function() {
    $(".center").hide()
    $(".image").toggleClass("exit")
    $(".descriptions").show()
    $(".description").removeClass("active")
    $(".description." + $(this).attr("id")).addClass("active")
  })
  $(".backbutton").click(function() {
    $(".image").toggleClass("exit")
    $(".descriptions").hide()
    $(".center").show()
  })
})


let ES = {
  bottom_disclaimer: 'P&aacute;gina no esta adaptada para m&oacute;vil.',
  hello: 'HOLA',
  im: 'SOY',
  enter: 'ENTRAR',
  barcelona: 'BARCELONA, ESPA&Ntilde;A',
  learn_more_about_me: 'Clickea alguna ciudad para aprender m&aacute;s de m&iacute;',
  go_back: 'Volver',
  go_back_2: 'Atr&aacute;s',
  barcelona_description: 'He crecido al lado de Barcelona en Sant Cugat, viviendo all&iacute; 10 a&ntilde;os. S&iacute;, soy cul&eacute;, pero siempre animo a equipos espa&ntilde;oles en torneos internacionales, por lo tanto me gusta el Madrid tambi&eacute;n (de vez en cuando). A los 11 a&ntilde;os, jugaba a un juego que se llama Tibia, donde jugadores pod&iacute;an crear sus propios mundos y ponerlos online, muy parecido a Minecraft. Era aqu&iacute; donde comenz&oacute; mi pasi&oacute;n de programar, ya que pod&iacute;a crear mi propio juego e invitar a mis amigos. Pero era muy dif&iacute;cil motivarme porque esa pasi&oacute;n no exist&iacute;a alrededor m&iacute;o. Entonces me viciaba m&aacute;s a otros juegos, y viviendo la vida. No era hasta que me mudara a los Estados Unidos donde encontr&eacute; esas comunidades de personas (de mi edad) y mejorar mis habilidades de programaci&oacute;n.<br />Aqui tengo una foto de uno de mis primeros proyectos.',
  sanmateo_description: 'A los 14 a&ntilde;os de edad, mi familia y yo nos mudamos a San Mateo, cerca de San Francisco. La comunidad de programadores es mucho m&aacute;s grande, hay m&aacute;s personas que quer&iacute;an programar como yo - desde entonces program&eacute; m&aacute;s en serio, yendo a hackathones y creando proyectos. En 3 a&ntilde;os, me fui a m&aacute;s de 35 hackathones, creando proyectos y conociendo a personas. Si, la serie Silicon Valley es bastante precisa. San Francisco es una ciudad con mucha vida, muy bonita y espero (si no todav&iacute;a) que veng&aacute;is a visitar. <br>Adem&aacute;s de programar, me encanta viajar, explorar y caminar por todas las partes. Me interesa las diversas culturas por todo el mundo y espero poder visitarlos todos. Desde que me fui a un concierto de m&uacute;sica electr&oacute;nica el mes pasado, la escucho muy apasionadamente. Estoy jugando mucho con programas de m&uacute;sica para crear la, ya puedo poner dos sonidos juntos (ya os contar&eacute; de cualquier progreso). <br /> Os dejo una p&aacute;gina web que he trabajado para un hackathon que estaba organizando: <a href="http://www.hshacks.com" target="_blank">www.hshacks.com</a> <br> <br> Estoy muy contento de estar en Intelygenz, estoy seguro que me lo voy a pasar excelentemente y aprender mucho.'
}

let EN = {
  bottom_disclaimer: 'Website not adapted for mobile.',
  hello: 'HELLO',
  im: 'I\'M',
  enter: 'ENTER',
  barcelona: 'BARCELONA, SPAIN',
  learn_more_about_me: 'Click on a city to know more about me.',
  go_back: 'Go Back',
  go_back_2: 'Go Back',
  barcelona_description: 'I grew up in a town near Barcelona called Sant Cugat, living there for 10 years. I am a Barcelona Fan (I don\'t want to disapoint the Madrid fans over here), but I always cheer for Spanish teams internationally, most of the times. When I was 11 years old, I used to play a very popular game in Europe called Tibia, it\'s the equivalent to Minecraft. This is when my love for coding started, because I could create my own worlds and share them with my friends to all play together. But I quickly lost motivation due to the small precense of programming, especially of kids of my age at that time. Instead, I played lots of video games and just lived life like the little kid I once was. When I moved to the United States, I found that passion around me and I was more driven to code more, improving my coding skills.<br> Here is a screenshot of my first ever project.',
  sanmateo_description: 'When I was 14 years old, my family and I moved to San Mateo in the Bay Area. It was amazing to see so many kids of my age were involved in coding and I was excited to pick it back up. Since then, I have been coding more seriously and consistently, going to hackathons and creating projects along the way. In the 3 years I\'ve live there, I\'ve been to 35 hackathons, meeting amazing people and creating hacks. [In this sentence I let my Madrid colleagues that the Silicon Valley series is pretty accurate]. I love San Francisco and I\'m excited to be staying there for college. If you haven\'t been yet, come and visit!<br> In addition to coding, I love exploring and getting to know cultures around the world. Ever since I\'ve been to a music concert last month, I listen to music with great passion and I\'m currently playing with music production applications, I can now put two sounds together! <br> Here is a link to a hackathon I\'ve organized, in which I made the website. <a href="www.hshacks.com">www.hshacks.com</a> <br> <br> I\'m very excited to be at Intelygenz, I\'m sure I\'m going to learn a lot over here and have lots of fun while at it.'
}

function load(language) {
  if(language === 'ES') {
    $('.bottom').html(ES.bottom_disclaimer)
    $('.one .hola').html(ES.hello)
    $('.one .text .left').html(ES.im)
    $('.one .enter span').html(ES.enter)
    $('.two .image#barcelona .country').html(ES.barcelona)
    $('.two .center span').html(ES.learn_more_about_me)
    $('.two .center .goback').html(ES.go_back)
    $('.backbutton').html(ES.go_back_2)
    $('.barcelona .text').html(ES.barcelona_description)
    return $('.sanmateo .text').html(ES.sanmateo_description)
  }
  $('.bottom').html(EN.bottom_disclaimer)
  $('.one .hola').html(EN.hello)
  $('.one .text .left').html(EN.im)
  $('.one .enter span').html(EN.enter)
  $('.two .image#barcelona .country').html(EN.barcelona)
  $('.two .center span').html(EN.learn_more_about_me)
  $('.two .center .goback').html(EN.go_back)
  $('.backbutton').html(EN.go_back_2)
  $('.barcelona .text').html(EN.barcelona_description)
  $('.sanmateo .text').html(EN.sanmateo_description)
}
