const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addUserFriend,
  deleteUserFriend,
} = require('../../controllers/UserController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

router.route(`/:userId/friends/:friendId`).put(addUserFriend).delete(deleteUserFriend)

module.exports = router;