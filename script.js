let a = [
  "initializing Hack Tools..",
  "connecting to Instagram..",
  "connecting to server 1..",
  "connection failed.. Retiring...",
  "connecting to server 2..",
  "connected successfully..",
  'Username :- "jiya-ur-rahman"',
  "Trying Brute Force..",
  "200k passwords tried..",
  "Match not found..",
  "Another 200k passwords tried..",
  "Match not found..",
  "Another 200k passwords tried..",
  "Match found..",
  "Accessing Account..",
  "Processing..",
  ".",
  ".",
  ".",
  "HACKED SUCCESSFULLY"
]

const sleep = async (seconds)=> {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      resolve(true)}, seconds*1000)
  })
}

const showhack = async (messages)=> {
  await sleep(2)
  //console.log(messages)
  hack.innerHTML = hack.innerHTML+ messages + "<br>"+"<br>"
}

(async ()=> {
  for (let i = 0; i < a.length; i++) {
    await showhack(a[i])
  }
})()