// source funfun function

const barker = state => ({
  bark: () => console.log(`Woof I'm ${state.name}`)
});

const driver = state => ({
  drive: () => state.position = state.position + state.speed
});

const killer = state => ({
  kill: () => console.log(`I've done with ${state.name}`)
});


const murderRobotDog = name => {
  let state = {
    name,
    speed: 100,
    position: 0,
  };

  return Object.assign(
    {},
    barker(state),
    driver(state),
    killer(state),
  );
};

barker({ name: 'Karo' });

const murderRobotDoggie = murderRobotDog('Karo');
murderRobotDoggie.kill();
