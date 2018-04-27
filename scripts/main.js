var result = null;
var fileInput = document.getElementById('fileInput');
var rawBtn = document.getElementById('DisplayRaw');
var processedBtn = document.getElementById('DisplayProcessed');




function processFunction(r) {
    let input = r;




    var inputSplit = input.match(/.{1,27}/g);


    var firstSet = new Array();
    firstSet.push(inputSplit[0]);
        firstSet.push(inputSplit[1]);
            firstSet.push(inputSplit[2]);

    var secondSet = new Array();
    secondSet.push(inputSplit[3]);
        secondSet.push(inputSplit[4]);
            secondSet.push(inputSplit[5]);

    var thirdSet = new Array();
    thirdSet.push(inputSplit[6]);
        thirdSet.push(inputSplit[7]);
            thirdSet.push(inputSplit[8]);

    var fourthSet = new Array();
    fourthSet.push(inputSplit[9]);
        fourthSet.push(inputSplit[10]);
            fourthSet.push(inputSplit[11]);

          console.log(firstSet);
            console.log(secondSet);
              console.log(thirdSet);
                console.log(fourthSet);


    var first = ProcessDigits(firstSet);
    var second = ProcessDigits(secondSet);
    var third = ProcessDigits(thirdSet);
    var fourth = ProcessDigits(fourthSet);

            console.log(first);
              console.log(second);
                console.log(third);
                  console.log(fourth);

    var firstNums = "";
    for(let i = 0;i< first.length;i++){
      firstNums+=SevenSegmentDecoder(first[i]);
    }
    var secondNums = "";
    for(let i = 0;i< first.length;i++){
      secondNums+=SevenSegmentDecoder(second[i]);
    }
    var thirdNums = "";
    for(let i = 0;i< first.length;i++){
      thirdNums+=SevenSegmentDecoder(third[i]);
    }
    var fourthNums = "";
    for(let i = 0;i< first.length;i++){
      fourthNums+=SevenSegmentDecoder(fourth[i]);
    }
      console.log(firstNums);
          console.log(secondNums);
              console.log(thirdNums);
                  console.log(fourthNums);
    let nums = [];
    nums.push(firstNums);
        nums.push(secondNums);
            nums.push(thirdNums);
                nums.push(fourthNums);
    return nums;
}

function SevenSegmentDecoder(x){
  //takes in a key, and converst the key to a digit
    var answer = null;

      const zero = "123456";
      const one = "23";
      const two = "12457";
      const three = "12347";
      const four = "2367";
      const five = "13467";
      const six = "134567";
      const seven = "123";
      const eight = "1234567";
      const nine = "123467";

  switch(x){
    case zero:
      answer = 0;
      break;
    case one:
      answer = 1;
      break;
    case two:
      answer = 2;
      break;
    case three:
      answer = 3;
      break;
      case four:
        answer = 4;
        break;
        case five:
          answer = 5;
          break;
          case six:
            answer = 6;
            break;
            case seven:
              answer = 7;
              break;
              case eight:
                answer = 8;
                break;
                case nine:
                  answer = 9;
                  break;
                }


  return answer;
}
function SortString(string){
  let newString = [...string].sort();
  let done = newString[0];
  for(let i = 1;i< newString.length;i++){
    done+=newString[i];
  }
  return done;
}
function ProcessDigits(x){
    var LookFor = x;
    var firstSetSevenSeg = new Array(9);
    for(let i = 0;i< firstSetSevenSeg.length;i++){
      firstSetSevenSeg[i]= "";
    }

    let currentNum = 0;
    let numCount = 0;

    for(let i = 0;i< 3;i++){

      for(let j = segIndex = 0;j< 27;j++,numCount++,segIndex++){
        //firstSet[i].charAt(j)
        switch(LookFor[i].charAt(j)){
          case `|`:
          if(i===1){
            if(j===0||j===3||j===6||j===9||j===12||j===15||j===18||j===21||j===24){//left
              firstSetSevenSeg[currentNum]+= `6`;
            }
            if(j===2||j===5||j===8||j===11||j===14||j===17||j===20||j===23||j===26){//right
              firstSetSevenSeg[currentNum]+= `2`;
            }

          }
          if(i===2){
            if(j===0||j===3||j===6||j===9||j===12||j===15||j===18||j===21||j===24){//left
              firstSetSevenSeg[currentNum]+= `5`;
            }
            if(j===2||j===5||j===8||j===11||j===14||j===17||j===20||j===23||j===26){//right
              firstSetSevenSeg[currentNum]+= `3`;
            }

          }
            break;
          case `_`:
          if(i===0){
            if(j===1||j===4||j===7||j===10||j===13||j===16||j===19||j===22||j===25){//mid
              firstSetSevenSeg[currentNum]+= `1`;
            }
          }
          if(i===1){
            if(j===1||j===4||j===7||j===10||j===13||j===16||j===19||j===22||j===25){//mid
              firstSetSevenSeg[currentNum]+= `7`;
            }
          }
          if(i===2){
            if(j===1||j===4||j===7||j===10||j===13||j===16||j===19||j===22||j===25){//mid
              firstSetSevenSeg[currentNum]+= `4`;
            }
          }
            break;
        }

        if((j+1)%3===0){
          console.log(currentNum);
          currentNum++;
          numCount=0;
        }
        if(segIndex===2){
          segIndex=0;
        }
      }
      currentNum=0;
    }
  for(let i = 0;i<firstSetSevenSeg.length;i++ ){
        firstSetSevenSeg[i] = SortString(firstSetSevenSeg[i]);
  }
  return firstSetSevenSeg;
}


window.onload = function () {
    fileInput.addEventListener('change', function (e) {
        var file = fileInput.files[0];
        var textType = /text.*/;

        if (file.type.match(textType)) {
            var reader = new FileReader();


            reader.onload = function (e) {
                result = reader.result;
                console.log(result);
            }
            reader.readAsText(file);
        }
        else {
            fileDisplayArea.innerText = "File not supported!"
        }



    });

}
rawBtn.onclick = function () {
    if (result === null) {
        alert("no input!");
    }
    else {
        var display = document.getElementById('fileDisplayArea');
        display.innerText = result;
    }
};
processedBtn.onclick = function () {
    if (result === null) {
        alert("no input!");
    }
    else {
        let out = processFunction(result);
        let display_p = document.getElementById('processedInput');
        display_p.innerText = out;
    }
};
