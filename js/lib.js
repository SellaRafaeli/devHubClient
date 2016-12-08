function getHTML(path, selector = 'body') {
  $.get(path).success(res => $(selector).append(res));
}

function log(str) { console.log(str) }

function winHash() { 
  return window.location.href.split("#")[1].split('?')[0].toString().toLowerCase();
}

function niceTime(timestamp){
  var z = new Date(timestamp);
  return z.toLocaleString();
}

qs = function winHashQSObj(){
  var qs = window.location.href.split("#")[1].toString().split('?')[1];
  return qsToObj(qs);
}

function qsToObj(str) {
    if (!str) return {};
    var pieces = str.split("&"), data = {}, i, parts; for (i = 0; i < pieces.length; i++) {parts = pieces[i].split("="); if (parts.length < 2) {parts.push(""); } data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]); } return data;
}

