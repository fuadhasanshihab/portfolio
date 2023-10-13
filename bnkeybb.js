//  copyright lexilogos.com
function alpha(item) {
    var input = document.conversion.saisie;
    if (document.selection) {
        input.focus();
        range = document.selection.createRange();
        range.text = item;
        range.select();
    }
    else if (input.selectionStart || input.selectionStart === '0') {
        var startPos = input.selectionStart;
        var endPos = input.selectionEnd;
        var cursorPos = startPos;
        var scrollTop = input.scrollTop;
        var baselength = 0;
        input.value = input.value.substring(0, startPos)
            + item
            + input.value.substring(endPos, input.value.length);
        cursorPos += item.length;
        input.focus();
        input.selectionStart = cursorPos;
        input.selectionEnd = cursorPos;
        input.scrollTop = scrollTop;
    }
    else {
        input.value += item;
        input.focus();
    }
}

//function copy() {
//    textRange = document.conversion.saisie.createTextRange();
//    textRange.execCommand("Copy");
//    textRange = "";
//}

var car;
function annuler() {
    car = document.conversion.saisie.value;
    car = car.replace(/\u200b/g, "");
    document.conversion.saisie.value = car;
}

//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;

//? car = car.replace(/à§-/g, "â€à§"); 

car = car.replace(/a/g, "à¦…");
car = car.replace(/[AÄ]/g, "à¦†");
car = car.replace(/i/g, "à¦‡");
car = car.replace(/[IÄ«]/g, "à¦ˆ");
car = car.replace(/u/g, "à¦‰");
car = car.replace(/[UÅ«]/g, "à¦Š");
car = car.replace(/à¦…à¦…/g, "à¦†");
car = car.replace(/à¦‡à¦‡/g, "à¦ˆ");
car = car.replace(/à¦‰à¦‰/g, "à¦Š");
car = car.replace(/[eÃª]/g, "à¦");
car = car.replace(/[oÃ´]/g, "à¦“");
car = car.replace(/à¦…à¦‡/g, "à¦");
car = car.replace(/à¦…à¦‰/g, "à¦”");


// suppression du virama 
car = car.replace(/à¦¿à¦‡/g, "à§€");
car = car.replace(/à§à¦‰/g, "à§‚");
car = car.replace(/à§à¦“/g, "\u200b");
car = car.replace(/à§à¦…/g, "à¦¾");
car = car.replace(/\u200bà¦‡/g, "à§ˆ");
car = car.replace(/\u200bà¦‰/g, "à§Œ");
car = car.replace(/\u200bà¦“/g, "à§‹");
car = car.replace(/\u200bà¦Š/g, "à§—"); //aU 

car = car.replace(/à§à¦†/g, "à¦¾");
car = car.replace(/à§à¦‡/g, "à¦¿");
car = car.replace(/à§à¦ˆ/g, "à§€");
car = car.replace(/à§à¦‰/g, "à§");
car = car.replace(/à§à¦Š/g, "à§‚");

car = car.replace(/à§à¦‹/g, "à§ƒ");
car = car.replace(/à§à§ /g, "à§„");
car = car.replace(/à§à¦Œ/g, "à§¢");
car = car.replace(/à§à§¡/g, " à§£");
car = car.replace(/à§à¦/g, "à§‡");
//car = car.replace(/à§à¦“/g, "à§‹");
car = car.replace(/à§ /g, " ");

//cons
car = car.replace(/n/g, "à¦¨à§");
car = car.replace(/k/g, "à¦•à§");
car = car.replace(/g/g, "à¦—à§");
car = car.replace(/c/g, "à¦šà§");
car = car.replace(/j/g, "à¦œà§");
car = car.replace(/[Tá¹­á¹¬]/g, "à¦Ÿà§");
car = car.replace(/[Dá¸á¸Œ]/g, "à¦¡à§");
car = car.replace(/[Ná¹‡á¹†]/g, "à¦£à§");
car = car.replace(/t/g, "à¦¤à§");
car = car.replace(/d/g, "à¦¦à§");
car = car.replace(/p/g, "à¦ªà§");
car = car.replace(/b/g, "à¦¬à§");
car = car.replace(/m/g, "à¦®à§");
car = car.replace(/Y/g, "à§Ÿà§");
car = car.replace(/R/g, "à§œà§");
car = car.replace(/y/g, "à¦¯à§");
car = car.replace(/r/g, "à¦°à§");
car = car.replace(/l/g, "à¦²à§");
car = car.replace(/h/g, "à¦¹à§");
car = car.replace(/[Sá¹£á¹¢]/g, "à¦·à§");
car = car.replace(/s/g, "à¦¸à§");
// cas particuliers 
car = car.replace(/G/g, "à¦™à§");
car = car.replace(/J/g, "à¦žà§");
car = car.replace(/Ã±/g, "à¦žà§");
car = car.replace(/à¦¨à§à¦—à§/g, "à¦™à§");
car = car.replace(/à¦¨à§à¦œà§/g, "à¦žà§");

// aspirÃ©es
car = car.replace(/à¦•à§à¦¹à§/g, "à¦–à§");
car = car.replace(/à¦—à§à¦¹à§/g, "à¦˜à§");
car = car.replace(/à¦šà§à¦¹à§/g, "à¦›à§");
car = car.replace(/à¦œà§à¦¹à§/g, "à¦à§");
car = car.replace(/à¦Ÿà§à¦¹à§/g, "à¦ à§");
car = car.replace(/à¦¡à§à¦¹à§/g, "à¦¢à§");
car = car.replace(/à¦¤à§à¦¹à§/g, "à¦¥à§");
car = car.replace(/à¦¦à§à¦¹à§/g, "à¦§à§");
car = car.replace(/à¦ªà§à¦¹à§/g, "à¦«à§");
car = car.replace(/à¦¬à§à¦¹à§/g, "à¦­à§");
car = car.replace(/à§œà§à¦¹à§/g, "à§à§");


// cas du s barre
car = car.replace(/à¦¸à§à¦¹à§/g, "à¦¶à§");
car = car.replace(/[Ã§zÅ›Åš]/g, "à¦¶à§");

// cas du ri li 
car = car.replace(/à§-à¦°à§/g, "à§ƒ");
car = car.replace(/-à¦°à§/g, "à¦‹");
car = car.replace(/à¦‹à¦‡/g, "à§ ");
car = car.replace(/à§ƒà¦‡/g, "à§„");

car = car.replace(/à§-à¦²à§/g, "à§¢");
car = car.replace(/-à¦²à§/g, "à¦Œ");
car = car.replace(/à¦Œà¦‡/g, "à§¡");
car = car.replace(/à§¢à¦‡/g, "à§£");

// ponctuation devanagari
car = car.replace(/\|/g, "à¥¤");
car = car.replace(/\//g, "à¥¤");
car = car.replace(/à¥¤à¥¤/g, "à¥¥");

//suppression du zero
car = car.replace(/\u200bà¦•/g, "à¦•");
car = car.replace(/\u200bà¦–/g, "à¦–");
car = car.replace(/\u200bà¦—/g, "à¦—");
car = car.replace(/\u200bà¦˜/g, "à¦˜");
car = car.replace(/\u200bà¦™/g, "à¦™");
car = car.replace(/\u200bà¦š/g, "à¦š");
car = car.replace(/\u200bà¦›/g, "à¦›");
car = car.replace(/\u200bà¦œ/g, "à¦œ");
car = car.replace(/\u200bà¦/g, "à¦");
car = car.replace(/\u200bà¦ž/g, "à¦ž");
car = car.replace(/\u200bà¦Ÿ/g, "à¦Ÿ");
car = car.replace(/\u200bà¦ /g, "à¦ ");
car = car.replace(/\u200bà¦¡/g, "à¦¡");
car = car.replace(/\u200bà¦¢/g, "à¦¢");
car = car.replace(/\u200bà¦£/g, "à¦£");
car = car.replace(/\u200bà¦¤/g, "à¦¤");
car = car.replace(/\u200bà¦¥/g, "à¦¥");
car = car.replace(/\u200bà¦¦/g, "à¦¦");
car = car.replace(/\u200bà¦§/g, "à¦§");
car = car.replace(/\u200bà¦¨/g, "à¦¨");
car = car.replace(/\u200bà¦ª/g, "à¦ª");
car = car.replace(/\u200bà¦«/g, "à¦«");
car = car.replace(/\u200bà¦¬/g, "à¦¬");
car = car.replace(/\u200bà¦­/g, "à¦­");
car = car.replace(/\u200bà¦®/g, "à¦®");
car = car.replace(/\u200bà¦¯/g, "à¦¯");
car = car.replace(/\u200bà¦°/g, "à¦°");
car = car.replace(/\u200bà¦²/g, "à¦²");
car = car.replace(/\u200bà¦¶/g, "à¦¶");
car = car.replace(/\u200bà¦·/g, "à¦·");
car = car.replace(/\u200bà¦¸/g, "à¦¸");
car = car.replace(/\u200bà¦¹/g, "à¦¹");
car = car.replace(/\u200b /g, " ");
car = car.replace(/\u200b\à¦‚/g, "à¦‚");
car = car.replace(/\u200b\à¦ƒ/g, "à¦ƒ");

// anusvara
car = car.replace(/[Má¹]/g, "à¦‚");
car = car.replace(/à§à¦‚/g, "à¦‚");
// candrabindu 
car = car.replace(/à¦‚à¦‚/g, "à¦");
// visarga
car = car.replace(/[Há¸¥]/g, "à¦ƒ");
car = car.replace(/à§à¦ƒ/g, "à¦ƒ");

// alternative : car = car.replace(/:/g, "à¤ƒ");
// avagraha
car = car.replace(/\'/g, "à¦½");
car = car.replace(/â€™/g, "à¦½");

car = car.replace(/0/g, "à§¦");
car = car.replace(/1/g, "à§§");
car = car.replace(/2/g, "à§¨");
car = car.replace(/3/g, "à§©");
car = car.replace(/4/g, "à§ª");
car = car.replace(/5/g, "à§«");
car = car.replace(/6/g, "à§¬");
car = car.replace(/7/g, "à§­");
car = car.replace(/8/g, "à§®");
car = car.replace(/9/g, "à§¯");

startPos = document.conversion.saisie.selectionStart;
endPos = document.conversion.saisie.selectionEnd;

beforeLen = document.conversion.saisie.value.length;
afterLen = car.length;
adjustment = afterLen - beforeLen;

document.conversion.saisie.value = car;

document.conversion.saisie.selectionStart = startPos + adjustment;
document.conversion.saisie.selectionEnd = endPos + adjustment;

var obj = document.conversion.saisie;
obj.focus();
obj.scrollTop = obj.scrollHeight;
}
