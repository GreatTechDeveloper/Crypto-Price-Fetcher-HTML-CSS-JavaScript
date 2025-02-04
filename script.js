const btc = document.getElementById("bitcoin");
const ether = document.getElementById("ethereum");
const doge = document.getElementById("dogecoin");

const settings = {
  "async": true,
  "crossDomain": true, // اصلاح از 'scrossDomain' به 'crossDomain'
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  "method": "GET",
  "headers": {}
};

$.ajax(settings).done(function (response) {
    btc.innerHTML = response.bitcoin.usd;
    ether.innerHTML = response.ethereum.usd; // استفاده از متغیر درست
    doge.innerHTML = response.dogecoin.usd;
});
