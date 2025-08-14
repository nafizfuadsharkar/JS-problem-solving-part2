function  onlyCharacter( str ) {
          if (typeof str !== 'string'){
            return "Invalid"
          }
          let str2 = str.replaceAll(' ', '').toUpperCase();
          return str2;
}

let output = onlyCharacter(" ha ck m e 1 @ru.c  n  ");
console.log(output)