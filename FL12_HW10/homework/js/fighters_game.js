class Fighter {
    // name;
    // health;
    // strength;
    // agility;
    // damage;
    // wins = 0;
    // losses = 0;

    constructor(options) {
      this.options = options;
      this.health = options.hp;
      this.damage = options.damage;
      this.strength = options.strength;
      this.agility = options.agility;
      this.name = options.name;
    }

    getName() {
      return this.options.name;
    }

    getDamage() {
      return this.options.damage;
    }

    getStrength() {
      return this.options.strength;
    }

    getAgility() {
      return this.options.agility;
    }

    getHealth() {
      return this.health;
    }

    attack(fighter) {
      const DefChance = fighter.getAgility() + fighter.getStrength();
      const maxChance = 100;
      const result = Math.floor(Math.random() * maxChance);
      if (result <= DefChance) {
        fighter.dealDamage(this.getDamage());
        console.log(`${this.getName()} makes ${this.getDamage()} to ${fighter.getName()}`);
      } else {
        console.log(`${this.getName()} attack missed`);
      }
    }

    logCombatHistory() {
      return `Name: ${this.getName()}, Wins: ${this.getWins()}, Losses: ${this.getLosses()}`;
    }

    heal(income) {
      if (this.getHealth() + income > this.getHealth()) {
        this.options.health = 100;
      } else {
        this.options.health = this.options.health + income;
      }
    }

    dealDamage(income) {
      let currentHP = this.health - income;
      if (currentHP < 0) {
        currentHP = 0;
      }
      this.health = currentHP;
    }

    addWin() {
      console.log(`${this.getName()} has won!`);
      this.wins += 1;
    }

    addLoss() {
      this.losses += 1;
    }

    getWins() {
      return this.wins;
    }

    getLosses() {
      return this.losses;
    }
}

function battle(Figher1, Figher2) {
  while (Figher1.getHealth() > 0 && Figher2.getHealth() > 0) {
    Figher2.attack(Figher1);
    Figher1.attack(Figher2);
    if (Figher1.getHealth() <= 0) {
      Figher1.addLoss();
      Figher2.addWin();
    }
    if (Figher2.getHealth() <= 0) {
      Figher2.addLoss();
      Figher1.addWin();
    }
  }
}
