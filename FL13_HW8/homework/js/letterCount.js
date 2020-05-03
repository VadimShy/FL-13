function letterCount(arg1, arg2) {
    let pos = -1;
    let i = 0;
    while ((pos = arg1.toLowerCase().indexOf(arg2.toLowerCase(), pos + 1)) !== -1){
        ++i
    }
    return i;
}

letterCount("Maggy","g");
letterCount("Barry","b");
letterCount("","z");