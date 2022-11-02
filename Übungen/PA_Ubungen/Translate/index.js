const dictionary = [
  { english: 'hello', klingonian: 'asvaim', urukhai: 'saruhachhh'},
  { english: 'love', klingonian: 'abocac', urukhai: 'hate' },
  { english: 'peace', klingonian: 'parshmen', urukhai: 'war' }
];

const TRANSLATE_LANGUAGES = document.getElementById("select");
const FROM = document.getElementById("from");
const TO = document.getElementById("to");

TRANSLATE_LANGUAGES.addEventListener("change", translatePlaceholder);
FROM.addEventListener("change", translate);

function translatePlaceholder() {
  if(TRANSLATE_LANGUAGES.value == "to Klingonian") {
    TO.placeholder = "to Klingonian";
  }
  if(TRANSLATE_LANGUAGES.value == "to Uruk-hai") {
    TO.placeholder = "to Uruk-hai";
  }
  if(TRANSLATE_LANGUAGES.value == "to English") {
    TO.placeholder = "to English";
  }
}

function translate() {
  for(let i = 0; i < dictionary.length; i++) {
    if(TRANSLATE_LANGUAGES.value == "to Klingonian") {
      if(FROM.value == dictionary[i].english) {
        TO.value = dictionary[i].klingonian;
        return;
      } else {
        TO.value = "!!! Error !!!";
        console.log("bin wieder drin" + TO);
      }
    }
    if(TRANSLATE_LANGUAGES.value == "to Uruk-hai") {
      if(FROM.value == dictionary[i].english) {
      TO.value = dictionary[i].urukhai;
      return;
      } else {
        TO.value = "!!! Error !!!";
      }
    }
    if(TRANSLATE_LANGUAGES.value == "to English") {
      if(FROM.value == dictionary[i].english) {
        TO.value = dictionary[i].english;
        return;
      } else {
        TO.value = "!!! Error !!!";
      }
    }
  }
}


// function translate() {
//     for(let i = 0; i < dictionary.length; i++) {
//       if(TRANSLATE_LANGUAGES.value == "to Klingonian" || TRANSLATE_LANGUAGES.value == "to Uruk-hai" || TRANSLATE_LANGUAGES.value == "to English") {
//         if(FROM.value == dictionary[i].english) {
//           TO.value = dictionary[i].klingonian;
//           TO.value = dictionary[i].urukhai;
//           TO.value = dictionary[i].english;
//         }
//       }
//     }
//   } 
        // else {
        //   TO.value = "!!! Error !!!";
        // }
  //     }
  //     if(TRANSLATE_LANGUAGES.value == "to Uruk-hai") {
  //       if(FROM.value == dictionary[i].english) {
        
  //       } else {
  //         TO.value = "!!! Error !!!";
  //       }
  //     }
  //     if(TRANSLATE_LANGUAGES.value == "to English") {
  //       if(FROM.value == dictionary[i].english) {
          
  //       } else {
  //         TO.value = "!!! Error !!!";
  //       }
  //     }
  //   }
  // }