class Fighter {
    constructor({name, damage, hp, ag}) {
      this._name = name;
      this._damage = damage;
      this._hp = hp;
      this._ag = ag;
      
      this._wins = 0;
      this._losses = 0;
    }
    
    set name(param) { 
      this._name = param;
    }
    set damage(param) { 
      this._damage = param;
    }
    set hp(param) { 
      this._hp = param;
    }
    set ag(param) { 
      this._ag = param;
    }
    
    get getName() { 
      return this._name;
    }
    get getDamage() { 
      return this._damage;
    }
    get getHp() { 
      return this._hp;
    }
    get getAg() { 
      return this._ag;
    }
    
    attack(enemy) {
      if(enemy instanceof Fighter) {
        let success = Math.floor(Math.random() * this._damage);
        if(success) {
          enemy.dealDamage(this._damage)
          console.log(`${this._name} deal ${this._damage} ${enemy.getName}`)
        } else {
          console.log(`${this._name} attack is missed`)
        }
      } else {
        throw new Error('method attack should receive instace of Fighter class')
      }
    }
    logBattleHistory() {
      return `Name: ${this._name}, Wins: ${this._wins}, Losses: ${this._losses}`;
    }
     
    heal(value=0) {
      this._hp +=value;
    }
    dealDamage(damage=0) {
      this._hp -= damage;
    }
    addWin() {
      this._wins++;
    }
    addLoss() {
      this._losses++;
    }
  }
  
  const battle = (a,b) => {
    if(!(a instanceof Fighter) || !(b instanceof Fighter)) {
      throw new Error('method attack should receive instace of Fighter class');
    }
    console.log(a,b)
    
    let curPlay = a;
    let another = b;
    let condition = a.getHp > 0 || b.getHp > 0;
    while(condition) {
      curPlay.attack(another);
      
      if(another.getHp <= 0) {
        console.log('battle has ended');
        curPlay.addWin();
        another.addLoss();
        break;
      }
      
      if(curPlay === a) {
        curPlay = b;
        another = a;
      } else {
        curPlay = a;
        another = b;
      }
    }
  }
  
  const John = new Fighter({name: 'John', damage:20, hp:100, ag:25});
  const Jack = new Fighter({name: 'Jack', damage:5, hp:50, ag:15});
  
  battle(John, Jack);
