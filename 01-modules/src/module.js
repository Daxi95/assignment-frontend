export function valid(email) {
    var regex = /^[a-z]*\.(mmt-)[bm][0-9]{4}(@fh-salzburg.ac.at)$/;
    return regex.test(email)
}

export function degreeProgram(email) {
    var regex = /[a-z]{3,4}(?=-[bm][0-9]{4}(@fh-salzburg.ac.at))/;
    return regex.exec(email)[0].toUpperCase();
}

export function level(email) {
    var regex = /[bm](?=[0-9]{4}(@fh-salzburg.ac.at))/;
    return regex.exec(email)[0] == "b" ? "BA" : "MA";
}

export function graduationYear(email) {
    var lev = level(email);

    var regex = /[0-9]{4}(?=(@fh-salzburg.ac.at))/;
    var startyear = parseInt(regex.exec(email)[0]);

    return startyear + (lev == "BA" ? 3 : 2);
}
