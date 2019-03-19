const express = require('express');
const router = express.Router();

const bookmarks_controller = require('../controllers/bookmarks.controller');

router.post('/create', bookmarks_controller.bookmark_create);
router.get('/:id', bookmarks_controller.bookmark_details);
router.put('/:id/update', bookmarks_controller.bookmark_update);
router.delete('/:id/delete', bookmarks_controller.bookmark_delete);

module.exports = router;
