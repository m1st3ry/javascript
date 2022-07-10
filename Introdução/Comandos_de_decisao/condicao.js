

function maior(a, b, c) {
    if (a > b && a > c) {
        return a;
    }   else if (b > a && b > c) {
        return b;
    }   else {
        return c;
    }   
}

function menor(a, b, c) {
    var r = a < b && a < c ? a : b < a && b < c ? b : c;
    return r;
}