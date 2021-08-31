import createMessenger from './message.js';

const messenger1 = createMessenger();
messenger1.sendMessage('Bob');

const messenger2 = createMessenger();
messenger2.setMessage('Good job');
messenger2.sendMessage('Tom');

const messenger3 = createMessenger();

messenger3.setSender('Gromcode');
messenger3.sendMessage('Bob');
