/* eslint-disable no-console */
const getAllUsers = (req, res) => {
  fetch('https://api.github.com/uers')
    .then((result) => result.json())
    .then((result) => res.status(200).json(result))
    .catch(console.log);
};
module.exports = { getAllUsers };
