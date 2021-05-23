// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

var numbers=new Array(25);
var cutnumber;
var result
var output;

var temp;
var random;
reset();
function reset() {
    numbers = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"];
    outputinit();
}

function outputinit(){
    result = numbers[0] + " " + numbers[1] + " " + numbers[2] + " " + numbers[3] + " " + numbers[4] + "\n" +
        numbers[5] + " " + numbers[6] + " " + numbers[7] + " " + numbers[8] + " " + numbers[9] + "\n" +
        numbers[10] + " " + numbers[11] + " " + numbers[12] + " " + numbers[13] + " " + numbers[14] + "\n" +
        numbers[15] + " " + numbers[16] + " " + numbers[17] + " " + numbers[18] + " " + numbers[19] + "\n" +
        numbers[20] + " " + numbers[21] + " " + numbers[22] + " " + numbers[23] + " " + numbers[24];
}

function jumble() {
    for (var i = 0; i < 25;i++){
        random = Math.round(Math.random()*100)/4;
        temp = numbers[random];
        numbers[random] = numbers[24 - random];
        numbers[24 - random] = temp;
    }
    outputinit();
}

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });


function start(client) {
    client.onMessage((message) => {
        if (message.body == 'Bingo' || message.body == 'bingo') {
            output = "Welcome to Bingo!!!\n\n" +
                "Type \"Bingo num\" to cut that num\n\n" +
                "But the board will jumble acc to your input\n\n" +
                "prime nums - no jumble\n" +
                "odd nums - maybe or may not be jumble\n" +
                "even nums - Always jumble\n";
        output += result;
      client
        .reply(message.from, output, message.id.toString())
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    else if (message.body.toString().substring(0,5) == 'Bingo' || message.body.toString().substring(0,5) == 'bingo') {
        cutnumber = message.body.toString().substring(6, message.body.toString().length);
        
        for (var i = 0; i < 25; i++){
            if (numbers[i].length == 4) {
                if (parseInt(numbers[i].substring(1, 3)) == parseInt(cutnumber)) {
                    output = "Already cut";
                    break;
                }
            }
            else if (numbers[i].length == 2) {
                if (parseInt(numbers[i]) == parseInt(cutnumber)) {
                    numbers[i] = '~' + numbers[i] + '~';

                    if (cutnumber == 2 || cutnumber == 3 || cutnumber == 5 || cutnumber == 7 || cutnumber == 11 || cutnumber == 13 || cutnumber == 17 || cutnumber == 23)
                        outputinit();
                    else if (cutnumber % 2 == 0)
                        jumble();
                    else if (cutnumber % 2 == 1){
                        if (Math.round(Math.random() * 10) % 2 == 0)
                            jumble();
                        else outputinit();
                    }
                
                    output = result;
                    break;
                }
            }
            
        }

        
        if (numbers[0].substring(0, 1) == "~" && numbers[1].substring(0, 1) == "~" && numbers[2].substring(0, 1) == "~" && numbers[3].substring(0, 1) == "~" && numbers[4].substring(0, 1) == "~")
        { output += "\n\nYou Won!!!"; reset();}
        else if (numbers[5].substring(0, 1) == "~" && numbers[6].substring(0, 1) == "~" && numbers[7].substring(0, 1) == "~" && numbers[8].substring(0, 1) == "~" && numbers[9].substring(0, 1) == "~")
        { output += "\n\nYou Won!!!"; reset();}
        else if (numbers[10].substring(0, 1) == "~" && numbers[11].substring(0, 1) == "~" && numbers[12].substring(0, 1) == "~" && numbers[13].substring(0, 1) == "~" && numbers[14].substring(0, 1) == "~")
        { output += "\n\nYou Won!!!"; reset();}
        else if (numbers[15].substring(0, 1) == "~" && numbers[16].substring(0, 1) == "~" && numbers[17].substring(0, 1) == "~" && numbers[18].substring(0, 1) == "~" && numbers[19].substring(0, 1) == "~")
        { output += "\n\nYou Won!!!"; reset();}
        else if (numbers[20].substring(0, 1) == "~" && numbers[21].substring(0, 1) == "~" && numbers[22].substring(0, 1) == "~" && numbers[23].substring(0, 1) == "~" && numbers[24].substring(0, 1) == "~")
        { output += "\n\nYou Won!!!"; reset();}
        
        else if (numbers[0].substring(0, 1) == "~" && numbers[5].substring(0, 1) == "~" && numbers[10].substring(0, 1) == "~" && numbers[15].substring(0, 1) == "~" && numbers[20].substring(0, 1) == "~")
        { output += "\n\nYou Won!!!"; reset();}
        else if (numbers[1].substring(0, 1) == "~" && numbers[6].substring(0, 1) == "~" && numbers[11].substring(0, 1) == "~" && numbers[16].substring(0, 1) == "~" && numbers[21].substring(0, 1) == "~")
        { output += "\n\nYou Won!!!"; reset();}
        else if (numbers[2].substring(0, 1) == "~" && numbers[7].substring(0, 1) == "~" && numbers[12].substring(0, 1) == "~" && numbers[17].substring(0, 1) == "~" && numbers[22].substring(0, 1) == "~")
        { output += "\n\nYou Won!!!"; reset();}
        else if (numbers[3].substring(0, 1) == "~" && numbers[8].substring(0, 1) == "~" && numbers[13].substring(0, 1) == "~" && numbers[18].substring(0, 1) == "~" && numbers[23].substring(0, 1) == "~")
        { output += "\n\nYou Won!!!"; reset();}
        else if (numbers[4].substring(0, 1) == "~" && numbers[9].substring(0, 1) == "~" && numbers[14].substring(0, 1) == "~" && numbers[19].substring(0, 1) == "~" && numbers[24].substring(0, 1) == "~")
        { output += "\n\nYou Won!!!"; reset();}
        
        else if (numbers[0].substring(0, 1) == "~" && numbers[6].substring(0, 1) == "~" && numbers[12].substring(0, 1) == "~" && numbers[18].substring(0, 1) == "~" && numbers[24].substring(0, 1) == "~")
        { output += "\n\nYou Won!!!"; reset();}
        else if (numbers[4].substring(0, 1) == "~" && numbers[8].substring(0, 1) == "~" && numbers[12].substring(0, 1) == "~" && numbers[16].substring(0, 1) == "~" && numbers[20].substring(0, 1) == "~")
        { output += "\n\nYou Won!!!"; reset();}
        
        

        client
          .reply(message.from, output, message.id.toString())
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }
  });
}