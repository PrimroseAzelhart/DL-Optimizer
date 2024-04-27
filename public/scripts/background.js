const exUrl = "https://www.kickstarter.com/discover"

// chrome.runtime.onInstalled.addListener(() => {
//     chrome.action.setBadgeText({
//         text: "OFF",
//     });
// });

// chrome.action.onClicked.addListener(async (tab) => {
//     if (tab.url.startsWith(exUrl)) {
//         const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
//         // Next state will always be the opposite
//         const nextState = prevState === 'ON' ? 'OFF' : 'ON';

//         // Set the action badge to the next state
//         await chrome.action.setBadgeText({
//             tabId: tab.id,
//             text: nextState
//         });

//         // if (nextState === "ON") {
//         //     // Insert the CSS file when the user turns the extension on
//         //     await chrome.scripting.insertCSS({
//         //       files: ["focus-mode.css"],
//         //       target: { tabId: tab.id },
//         //     });
//         //   } else if (nextState === "OFF") {
//         //     // Remove the CSS file when the user turns the extension off
//         //     await chrome.scripting.removeCSS({
//         //       files: ["focus-mode.css"],
//         //       target: { tabId: tab.id },
//         //     });
//         //   }
//     }
// })

// chrome.webNavigation.onDOMContentLoaded.addListener(async (tab) => {
//     if (tab.url.startsWith(exUrl)) {
//         chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
//             chrome.scripting.executeScript({target: {tabId: tabs[0].id}, files: ['scripts/save.js']})
//         })
//     }
// })

chrome.webRequest.onCompleted.addListener(async (tab) => {
    console.log('block');
    // if (tab.url.startsWith(exUrl)) {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.scripting.executeScript({target: {tabId: tabs[0].id}, files: ['scripts/block.js']})
        })
    // }
}, {urls: ["https://www.kickstarter.com/discover/advanced*"]})
