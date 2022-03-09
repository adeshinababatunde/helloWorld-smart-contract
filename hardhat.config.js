require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/er_qeGs8sIs4jSbmgov7nHElXr2tXx0W',
      accounts: [
        '54700b6ab221a3a09eb8c5d70879e81d99bef6025fc0d3f78eb9b3e4a97e3821',
      ],
    },
  },
}

