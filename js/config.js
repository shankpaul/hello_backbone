ENV = {
	NAME: "development"
};

var hostName = location.hostName;
if(hostName == "abhidsm.github.com") {
	ENV.NAME = "production";
}
