const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'https://www.mercadobitcoin.net/',
        secure: true,
        logLevel: 'debug'
    }
];

module.exports = PROXY_CONFIG; 