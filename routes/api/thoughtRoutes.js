const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtReaction,
  deleteThoughtReaction,
} = require('../../controllers/thoughtController.js');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route(`/:thoughtId/reactions`).put(addThoughtReaction)

router.route(`/:thoughtId/reactions/:reactionId`).put(deleteThoughtReaction)

module.exports = router;