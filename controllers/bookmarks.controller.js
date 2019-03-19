const Bookmark = require('../modules/bookmarks.model');

exports.bookmark_create = function (req, res) {
  let bookmark = new Bookmark(
    {
      title: req.body.title,
      link: req.body.link,
      tags: req.body.link
    }
  );

  bookmark.save(function (err) {
    if (err) return err;

    res.send('Bookmark created successfully.');
  });
}

exports.bookmark_details = function (req, res) {
  Bookmark.findById(req.params.id, function (err, bookmark) {
    if (err) return err;
    res.send(bookmark);
  })
};

exports.bookmark_update = function (req, res) {
  Bookmark.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, bookmark) {
    if (err) return err;
    res.send('Bookmark udpated successfully.');
  });
};

exports.bookmark_delete = function (req, res) {
  Bookmark.findByIdAndDelete(req.params.id, function (err) {
    if (err) return err;
    res.send('Product removed successfully.');
  });
}