var userArr = [
	"magic",
	"batman12338",
	"ESL_SC2",
	"OgamingSC2",
	"cretetion",
	"freecodecamp",
	"storbeck",
	"habathcx",
	"RobotCaleb",
	"noobs2ninjas",
	"comster404"
];

for (var user in userArr) {
	var url =
		"https://wind-bow.gomix.me/twitch-api/channels/" +
		userArr[user] +
		"?callback=?";

	$.getJSON(url, function(data) {
		console.log(data);

		var acctError =
			'<div class="box acctError">\
	<article class="media">\
		<div class="media-left">\
			<figure class="image is-64x64">\
			<img src="https://pbs.twimg.com/profile_images/610486974990913536/5MdbcHvF.png" alt="Image">\
			</figure>\
				</div>\
				<div class="media-content">\
				<div class="content">\
				<p>\
				<span class="streamer-title">' +
			userArr[user] +
			"</span>\
				<br>\
				The account has either been deleted or does not exist.\
				</p>\
			</div>\
		</article>\
	</div>";

		var acctOffline =
			'<div class="box acctOffline">\
	<article class="media">\
		<div class="media-left">\
			<figure class="image is-64x64">\
			<img src="' +
			data.logo +
			'" alt="Image">\
			</figure>\
				</div>\
				<div class="media-content">\
				<div class="content">\
				<p>\
				<a href="' +
			data.url +
			'" target="_blank"><span class="streamer-title">' +
			data.display_name +
			"</span></a>\
				<br>\
				" +
			"The account is currently offline." +
			"\
				</p>\
			</div>\
		</article>\
	</div>";

		var acctOnline =
			'<div class="box acctOnline">\
	<article class="media">\
		<div class="media-left">\
			<figure class="image is-64x64">\
			<img src="' +
			data.logo +
			'" alt="Image">\
			</figure>\
				</div>\
				<div class="media-content">\
				<div class="content">\
				<p>\
				<a href="' +
			data.url +
			'" target="_blank"><span class="streamer-title">' +
			data.display_name +
			"</span></a>\
				<br>\
				" +
			data.status +
			"\
				</p>\
			</div>\
		</article>\
	</div>";

		if (data.hasOwnProperty("error")) {
			$(".results").append(acctError);
		} else {
			if (data.status == null) {
				$(".results").append(acctOffline);
			} else {
				$(".results").append(acctOnline);
			}
		}
	});
}