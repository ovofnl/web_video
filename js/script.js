let max = 4,videoCount = 1;//max填自己添加的视频个数
let video = document.getElementById("screen")
function playOrPause(){
	let video = document.getElementById("screen")
	let pauseButton = document.getElementById("pause")
	if(video.paused){
		video.play()
		pauseButton.innerText = "暂停"
	}else{
		video.pause()
		pauseButton.innerText = "播放"
	}
}
function getLast(){
	let video = document.getElementById("screen")
	let pauseButton = document.getElementById("pause")
	if(videoCount-1 <= 0){
		window.alert("已经没有上一个视频了")
		return
	}
	let index = video.src.lastIndexOf("/")
	let preSrc = video.src.substring(0,index+1)
	video.src = preSrc + (--videoCount) +".mp4"
	video.play()
	pauseButton.innerText = "暂停"
}
function getNext(){
	let video = document.getElementById("screen")
	let pauseButton = document.getElementById("pause")
	if(videoCount+1 > max){
		window.alert("已经没有下一个视频了")
		return
	}
	let index = video.src.lastIndexOf("/")
	let preSrc = video.src.substring(0,index+1)
	video.src = preSrc + (++videoCount) +".mp4"
	video.play()
	console.log(video.src)
	pauseButton.innerText = "暂停"
}
