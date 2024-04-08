import { useEffect } from "react"

function IndexPopup() {
  useEffect(() => {
    chrome.tabs.create({
      url: "./tabs/index.html"
    })
  }, [])
}

export default IndexPopup