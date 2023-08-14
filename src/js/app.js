import GameSavingLoader from './gamesavingloader';

function processResponse(saving) {
  return saving;
}

function processError(error) {
  return error;
}

GameSavingLoader.load().then((saving) => {
  processResponse(saving);
}, (error) => {
  processError(error);
});
