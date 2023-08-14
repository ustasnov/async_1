import GameSavingLoader from '../gamesavingloader';

test('test load game saving function', (done) => {
  const sourceObj = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  GameSavingLoader.load().then((data) => {
    expect(data).toEqual(sourceObj);
    done();
  });
});
