function onBeforeSendHeaders(e) {
  let hdr = e.requestHeaders.find(hdr => hdr.name.toLowerCase() == "user-agent")
  hdr.value = hdr.value.replace(/Thunderbird/g, "Firefox");
	return { requestHeaders: e.requestHeaders };
}

browser.webRequest.onBeforeSendHeaders.addListener(
  onBeforeSendHeaders,
  { urls: ["https://*.whatsapp.com/*", "https://*.whatsapp.net/*"] },
  ["blocking", "requestHeaders"]
);

messenger.spaces.create("WhatsApp", "https://web.whatsapp.com", { title: "WhatsUp" });
