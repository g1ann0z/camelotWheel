const camelotWheel = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const camelotWheelMinor = ["Cm", "Cm#", "Dm", "Dm#", "Em", "Fm", "Fm#", "Gm", "Gm#", "Am", "Am#", "Bm"];

const tunrArray = camelotWheel.slice();
const tunrArrayMinor = camelotWheelMinor.slice();

function camelot(data) {
    let findI = 0;
    let findIMinor = 0;
    if (data === "Db") {
        data = "C#";
    } else if (data === "Eb") {
        data = "D#";
    } else if (data === "Gb") {
        data = "F#";
    } else if (data === "Ab") {
        data = "G#";
    } else if (data === "Bb") {
        data = "A#";
    } else if (data === "Dmb") {
        data = "Cm#";
    } else if (data === "Emb") {
        data = "Dm#";
    } else if (data === "Gmb") {
        data = "Fm#";
    } else if (data === "Amb") {
        data = "Gm#";
    } else if (data === "Bmb") {
        data = "Am#";
    }

    //if (data === "C" || data === "C#" || data === "D" || data === "D#" || data === "E" || data === "F" || data === "F#" || data === "G" || data === "G#" || data === "A" || data === "A#" || data === "B") {
    if(camelotWheel.includes(data)){   
        while (tunrArray[0] !== data) {
            tunrArray.push(tunrArray.shift());
        }
        console.log(tunrArray[5], "<=" + tunrArray[0] + "=>", tunrArray[7], tunrArray[9] + "m");
    } else if (camelotWheelMinor.includes(data)) {
        while (tunrArrayMinor[0] !== data) {
            tunrArrayMinor.push(tunrArrayMinor.shift());
            tunrArray.push(tunrArray.shift());
        }
        console.log(tunrArray[5] + "m", "<=" + tunrArray[0]+ "m" + "=>", tunrArray[7] + "m", tunrArray[3]);
    }

}

camelot("Bb");