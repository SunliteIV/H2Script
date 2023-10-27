const colorPickerBtn = document.querySelector("#color-picker");
const blockNFBtn = document.querySelector("#blockNF");
const clearAll = document.querySelector(".clear-all");
const colorList = document.querySelector(".all-colors");
const pickedColors = JSON.parse(localStorage.getItem("picked-colors") || "[]");

let inputElement = document.getElementById('timeVal');
inputElement.addEventListener('input', function() {
    let inputValue = inputElement.value;
    localStorage.setItem('timeVal', inputValue);
});
window.onload = function() {
    let savedValue = localStorage.getItem('timeVal');
    if (savedValue) {
        inputElement.value = savedValue;
    }
}

const copyColor = (elem) => {
	elem.innerText = "Copied";
	navigator.clipboard.writeText(elem.dataset.color);
	setTimeout(() => elem.innerText = elem.dataset.color, 1000);
}

const showColor = () => {
	if(!pickedColors.length) return;
	colorList.innerHTML = pickedColors.map(color => `
		<li class="color">
			<span class="rect" style="background: ${color}; border: 1px solid ${color == "#ffffff" ? "#ccc": color}"></span>
			<span class="value hex" data-color="${color}">${color}</span>
		</li>
	`).join("")
	document.querySelector(".picked-colors").classList.remove("hide");
	document.querySelectorAll(".color").forEach(li => {
		li.addEventListener("click", e => copyColor(e.currentTarget.lastElementChild));
	});
}
showColor();

const activateEyeDropper = () => {
	document.body.style.display = "none";
	setTimeout(async () => {
		try {
			const eyeDropper = new EyeDropper();
			const { sRGBHex } = await eyeDropper.open();
			navigator.clipboard.writeText(sRGBHex);
			if(!pickedColors.includes(sRGBHex)) {
				pickedColors.push(sRGBHex);
				localStorage.setItem("picked-colors", JSON.stringify(pickedColors));
				showColor();
			}
		} catch (error) {
			alert("Failed to copy the color code!");
		}
		document.body.style.display = "block";
	}, 10);
}
const clearAllColors = () => {
	pickedColors.length = 0;
	localStorage.setItem("picked-colors", JSON.stringify(pickedColors));
	document.querySelector(".picked-colors").classList.add("hide");
}

clearAll.addEventListener("click", clearAllColors)
colorPickerBtn.addEventListener("click", activateEyeDropper)

document.getElementById('autoMess').addEventListener('click', () => {
	document.getElementsByClassName('autoMessctn')[0].style.display = 'flex'
})


document.getElementById('sS').addEventListener('click', function() {
	let data = {
		uids: document.getElementById('uids').value,
		contents: document.getElementById('contents').value,
		delay: document.getElementById('delay').value
	}
	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, function(tabs) {
		const tabId = tabs[0].id;
		chrome.tabs.sendMessage(tabId, {action: 'startAutoMess', data: data});
	});
});


var blockNFCheckbox = document.getElementById('blockNF');
chrome.storage.local.get(['isBlocked'], function(result) {
	blockNFCheckbox.checked = result.isBlocked || false;
});
blockNFCheckbox.addEventListener('change', function() {
	var isBlocked = blockNFCheckbox.checked; // Lấy trạng thái của checkbox
	chrome.storage.local.set({
		isBlocked: isBlocked
	});
	var t = document.getElementById('timeVal').value
	if (isBlocked) {
		chrome.tabs.query({
			active: true,
			currentWindow: true
		}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {action: "block_newsfeed", value: t});
		});
	} else {
		chrome.tabs.query({
			active: true,
			currentWindow: true
		}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {action: "unblock_newsfeed"});
		});
	}
});

var receivedData = []
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    receivedData.push(message.data);
    document.getElementById('contents').value = receivedData
});