const heapdump = require('heapdump');
const os = require('os');
const router = require('express').Router();

router.get('/health', (req, res) => {
    res.json({
        status: 'UP',
        timestamp: new Date().toISOString(),
    });
});


router.get('/heapdump', (req, res) => {
    const dumpFileName = `heapdump-${Date.now()}.heapsnapshot`;
    const dumpFilePath = os.tmpdir() + '/' + dumpFileName;

    heapdump.writeSnapshot(dumpFilePath, (err) => {
        if (err) {
            console.error('Error generating heap dump:', err);
            res.status(500).send('Error generating heap dump');
        } else {
            res.download(dumpFilePath, dumpFileName);
        }
    });
});

module.exports = router;