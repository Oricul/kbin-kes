let gmPrefix
try {
	if(GM_info){
		gmPrefix = "GM_"
	} else {
		gmPrefix = "GM."
	}
} catch {
	console.log(error);
}
if (gmPrefix === "GM_") {
	if (GM_info.scriptHandler === "Greasemonkey"){
		gmPrefix = "GM."
	}
}
    console.log("GM prefix is " + gmPrefix);
window.safeGM = function(func,...args){
    let use
    let underscore = {
        setValue(...args) { return GM_setValue(...args) },
        getValue(...args) { return GM_getValue(...args) },
        addStyle(...args) { return GM_addStyle(...args)},
        xmlhttpRequest(...args) { return GM_xmlhttpRequest(...args)},
        setClipboard(...args) { return GM_setClipboard(...args)},
        getResourceText(...args) { return GM_getResourceText(...args)},
        info() { return GM_info }
    }
    let dot = {
        setValue(...args) { return GM.setValue(...args) },
        getValue(...args) { return GM.getValue(...args) },
        addStyle(...args) { return GM.addStyle(...args)},
        xmlhttpRequest(...args) { return GM.xmlHttpRequest(...args)},
        setClipboard(...args) { return GM.setClipboard(...args)},
        getResourceText(...args) { return GM.getResourceText(...args)},
        info() { return GM_info }
    }
    if (gmPrefix === "GM_") {
        use = underscore
    } else {
        use = dot
    }
    return use[func](...args);
}
