var express = require('express'),
    router = express.Router(),
    audioService = require('../services/media'),
    Promise = require('bluebird');

router.get('/', function (req, res, next) {
    var vm = {
        title: 'Media Listing',
        //orderId: req.session.orderId,
        firstName: req.user ? req.user.firstName : null
    };
    console.log("--------------Session info---------\n", req.session, "\n---------End session------------");
    res.render('media', vm);
});

router.get('/audio/listings', function(req, res) {

    audioService.listDirectory(function(err, data) {
        if (err)
            //return res.status(500).json({error: 'Failure retrieving directories.'});
            return res.status(500).json({error: err});

        return res.json(data);
    });
});

router.get('/audio/listings/:id', function(req, res) {

    audioService.getMediaDetails(req.params.id, function(err, data) {

        if (err)
            return res.status(500).json({error: 'An error occurred.'});
        return res.json(data);
    });
});

module.exports = router;
