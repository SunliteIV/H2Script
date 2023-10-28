var running = false;
var intervalId
function getQuote(t) {
	var newsfeedDiv = document.querySelector('div[role="main"]')
	function updateQuote() {
		let ranNum = Math.floor(Math.random() * 3017)
		if (newsfeedDiv) {
			var xhr = new XMLHttpRequest()
			xhr.open('GET', `https://YOUR_FIREBASE_DATATABASE_URL.firebasedatabase.app/${ranNum}.json`, true)
			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4 && xhr.status === 200) {
					let quote = xhr.responseText.replaceAll('\\n', "<br>")
					newsfeedDiv.innerHTML = `<div class="container"> <h1>${quote}</h1><a style=" font-weight: bold; text-decoration: none; margin-top: 12px; border-radius: 50px; font-size: 15px; padding: 3px; width: 88px; background: #fff; border: solid #fff; display: flex; align-items: center; justify-content: center;" href='https://www.google.com/search?q=${quote}' target="_blank">Chi tiết</a></div><style type="text/css">.container { border-radius: 12px; margin-top: 68px; padding: 25px; border: solid orange 3px; background: #ff7337;}.container h1 { font-size: 45px;}</style>`;
				} else if (xhr.readyState === 4) {
					console.error('Error fetching quote:', xhr.status, xhr.statusText)
				}
			}
			xhr.send()
		}
	}
	if (!running) {
		running = true
		time = 111
		updateQuote()
		intervalId = setInterval(updateQuote, Number(t))
	}
}

function sendMsg(uid, msg, name) {
	var xhr1 = new XMLHttpRequest()
	xhr1.open('GET', `https://m.facebook.com/messages/read/?fbid=${uid}`, true)
	xhr1.onreadystatechange = function () {
		if (xhr1.readyState === 4 && xhr1.status === 200) {
			let html = xhr1.responseText
			let tids = html.match(/tids=([^&]+)&amp;/)[1].replace('%3A', ':')
			let formAction = html.match(/action="([^"]+)"/)[1].replace(/&amp;/g, '&')
			let fb_dtsg = html.split('name="fb_dtsg" value="')[1]
			let jazoest = html.split('name="jazoest" value="')[1].split('"')[0]

			msg = msg.includes('<name>') ? msg.replace(/<name>/g, name) : msg

			let formData = new FormData()
			formData.append('tids', tids)
			formData.append('wwwupp', 'C3')
			formData.append(`ids[${uid}]`, uid)
			formData.append('platform_xmd', '')
			formData.append('body', msg)
			formData.append('waterfall_source', 'message')
			formData.append('action_time', Date.now())
			formData.append('fb_dtsg', fb_dtsg)
			formData.append('jazoest', Number(jazoest))
			let url = 'https://m.facebook.com' + formAction

			var xhr2 = new XMLHttpRequest();
			xhr2.open('POST', url, true)
			xhr2.send(formData)
			xhr2.onreadystatechange = function () {
				if (xhr2.readyState === 4 && xhr2.status === 200) {
					console.log(`[${uid}: ${name}] Thành công`)
					chrome.runtime.sendMessage({ data: `[${uid}: ${name}] Thành công` })
				}
			}
		}
	}
	xhr1.send()
}


var time = 111
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.action === "block_newsfeed") {
		getQuote(request.value)
	} else if (request.action === "unblock_newsfeed") {
		clearInterval(intervalId)
		running = false
		// location.reload()
	}
})

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.action === 'startAutoMess') {
		let data = request.data
		let listID = JSON.parse(data.uids)
		let msgList = data.contents.split('\n')
		let delay = data.delay
		for (let i in listID) {
			let msg = msgList[Math.floor(Math.random() * msgList.length)]
			let uid = i
			let nL = listID[i].split(' ').length
			let name = listID[i].split(' ')[nL - 1]
			if (msg.length > 0) {
				setTimeout(() => {
					sendMsg(Number(uid), msg, name)
				}, Number(delay))
			}
		}
	}
})