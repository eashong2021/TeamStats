const team = {
    _players: [
      {firstName: 'Pablo', lastName: 'Sanchez', age: 11},
    {firstName: 'Eben', lastName: 'Ash', age: 12},
    {firstName: 'Aaron', lastName: 'Kpanzako', age: 13}
    ],
    _games: [
      { opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
      { opponent: 'Kotoko', teamPoints: 60, opponentPoints: 35},
      { opponent: 'Hearts', teamPoints: 60, opponentPoints: 57}
    ],
    get _players() {
      return this._players;
    },
    get _games() {
      return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
          firstName: firstName,
          lastName: lastName,
          age: age
        };
    this.players.push(player);
    }
    addGame(oppName, points, oppPoints) {
      const game = {
        opponent: oppName;
        points: points;
        opponentPOints: oppPoints;
      }
      this.games.push(game);
    }
    }
    
    team.addPlayer('Steph', 'Curry', 28);
    team.addPlayer('Lisa', 'Leslie', 44);
    team.addPlayer('Bugs', 'Burry', 76);
    //console.log(team.players);
    team.addGame('Broncos', 100, 50);
    team.addGame('Kotoko', 56, 98);
    team.addGame('Hearts', 30, 47);
    console.log(team.games);
    
    
    
    
    
    