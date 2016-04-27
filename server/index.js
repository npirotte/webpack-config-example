const createAssetsServer = require('./servers/assets.js')
const createBackendServer = require('./servers/backend.js')

createBackendServer(8081)
createAssetsServer(8080, 8081)
