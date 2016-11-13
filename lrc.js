/**
 * Created by Administrator on 2016/11/12/012.
 */
var lines = data.split("\r");
var reg = /\[(\d{2}):(\d{2}):(\d{2})\]\s(.+)/;
lines.forEach(function (line, index) {
    var matches = reg.exec(line);
    if(matches) {
        var h = parseInt(matches[1])
        var m = parseInt(matches[2])
        var s = parseInt(matches[3]);
        var lrc = parseInt(matches[4]);

        var time = m*60+m*60+s;
        setTimeout(function () {
            console.log(lrc);
        }, time);

    }
})