const initAPIRoutes = app => {
    app.post('/API', (req, res) => {
        console.log('Incomming REQ..', req.body);
        res.send({msg: 'Pending auth route logic..'})
    })
}

module.exports = initAPIRoutes;