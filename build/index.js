var _ref, _ref2, _ref3, _createUser;

const createUser = name => ({
  name
});

const print = msg => console.log(msg);

const greet = userName => `Hello Im ${userName}`;

const capitalize = ({
  name
}) => name.charAt(0).toUpperCase() + name.slice(1);

const exclaim = msg => `${msg}!`;

const horacio = (_ref = (_ref2 = (_ref3 = (_createUser = createUser('horacio'), capitalize(horacio)(_createUser)), greet(_ref3)), exclaim(_ref2)), print(_ref));
