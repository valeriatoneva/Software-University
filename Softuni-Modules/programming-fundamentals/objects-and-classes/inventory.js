function solve(input) {
    let heros = [];
  
    for (let heroInfo of input) {
      let [name, level, items] = heroInfo.split(` / `);
  
      let currHero = {
        name: name,
        level: Number(level),
        items: items,
      };
      heros.push(currHero);
    }
    let sortedByLevel = heros.sort((a, b) => {
      return a.level - b.level;
    });
  
    for (let hero of sortedByLevel) {
      console.log(`Hero: ${hero.name}`);
      console.log(`level => ${hero.level}`);
      console.log(`items => ${hero.items}`);
    }
  }
  