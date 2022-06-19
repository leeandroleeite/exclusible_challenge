import WebSocket from 'ws';

let spread = 1.00;

let publicWebSocketURL = "wss://ws.kraken.com/";
let publicWebSocketSubscriptionMsg = '{ "event":"subscribe", "subscription":{"name":"spread"},"pair":["XBT/USD"] }';

export async function OpenAndStreamWebSocketSubscription() {

    try {
        const webSocketClient = new WebSocket(publicWebSocketURL);

        webSocketClient.on('open', function open() {
            webSocketClient.send(publicWebSocketSubscriptionMsg);
        });

        webSocketClient.on('message', async function incoming(wsMsg) {
            var date = new Date();
            var msgTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            var result = JSON.parse(wsMsg.toString());
            var pair = result[3];
            var values = result[1] || [];
            var price = values[0] * spread;

            if (price) {
                console.log(msgTime, pair, price + ', Spread: ' + spread)
            }
        });

        webSocketClient.on('close', function close() {
            console.log("WebSocket connection closed");
        });

    }
    catch (e) {
        console.log("AN EXCEPTION OCCURRED :(");
        console.log(e);
    }
};