(function () {

    var names = ["Yaakov", "Jorge", "Juana", "Jerry", "Pedro", "Figueroa", "Luis", "Paola", "Luisa", "Jose"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        byeSpeaker(names[i]);
      }
      else {
        helloSpeaker(names[i]);
      }
    }
    
    })();