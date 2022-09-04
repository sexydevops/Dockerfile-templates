const os = require('os');

const getPrivateIPV4 = () => {
  const networkInterfaces = os.networkInterfaces();
  const networkInterfaceIPV4 = networkInterfaces.eth0 && networkInterfaces.eth0.find(ni => ni.family === 'IPv4');
  return networkInterfaceIPV4 && networkInterfaceIPV4.address;
}

const crashServer = (ms) => {
  setInterval(crashServer, ms);
  setInterval(crashServer, ms);
};

module.exports = {
  getPrivateIPV4,
  crashServer,
}