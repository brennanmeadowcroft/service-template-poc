const merge = require('lodash.merge')
const commonModules = require('common-modules')

const appSpecificConfig = require('./config.json')
const logger = commonModules.logger
const baseConfig = commonModules.baseConfig
const expressWrapper = commonModules.server
const app = expressWrapper()

app.get('/', function (req, res) {
    logger.info('This is the logger!')
    res.send('Hello world')
})

app.get('/baseConfig', function (req, res) {
    logger.info({ baseConfig }, 'Base Config')
    res.send(baseConfig)
})

app.get('/modifiedConfig', function (req, res) {
    const modifiedConfig = merge(baseConfig, appSpecificConfig)
    logger.info({ baseConfig, appSpecificConfig, modifiedConfig }, 'Merged config')
    res.send(modifiedConfig)
})

app.get('/env', function (req, res) {
    const currentEnv = process.env.NODE_ENV || 'local'
    res.send(currentEnv)    
})

app.listen(3000);