const merge = require('lodash.merge')

const appSpecificConfig = require('')
const logger = require('common-modules').logger
const baseConfig = require('common-modules').baseConfig
const expressWrapper = require('common-modules').server
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

app.listen(3000);