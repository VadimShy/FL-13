function Student (name, email) {
    let data;
    this.name = name;
    this.email = email;

    this.getName = function() {
        let obj = data.find(item => item.name === this.name);
        return obj.name;
    }

    this.getEmail = function() {
        let obj = data.find(item => item.email === this.email);
        return obj.email;
    }
}




