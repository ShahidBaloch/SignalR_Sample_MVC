//CreateConnection
var connectionUserCount = new signalR.HubConnectionBuilder().withUrl("/hubs/userCount");

// connect to methods that hub invokes aka notification from hub
connectionUserCount.on("updateTotalViews", (value) => {
    var newCountSpan = document.getElementById("totalViewsCounter")
    newCountSpan.innerText = value.toString();
});
// invoke hub methods
function newWindowLoadedOnClient() {
    connectionUserCount.send("NewWindowLoaded")
}
function fulfilled() {
    console.log("Connection to User HUb Successful")
}
function rejected() {

}
connectionUserCount.start().then(fulfilled, rejected)