//函数定义

function o(n) {
        t = "",
            ['66', '72', '6f', '6d', '43', '68', '61', '72', '43', '6f', '64', '65']["forEach"](function (n) {
                t += unescape("%u00" + n)
            });
        var t, e = t;
        return String[e](['{', 'T', 'E', 'z', 'O', 'j', 'A', '4', 'O', 'j', 'E', '2', 'M', 'j', 'A', 'y', 'N', 'S', '0', 'w', 'N', 'y', '0', 'y', 'M', 'j', 'M', 'z', 'N', 'm', 'N', 'u', 'Z', 'n', 'J', 'l', 'Z', 'W', 'l', 'w', 'a', 'G', '9', 'u', 'Z', 'Q', '=', '=', '@', '#', '/', 'r', 'a', 'n', 'k', '/', 'i', 'n', 'd', 'e', 'x', '@', '#', '9', '1', '9', '4', '2', '8', '5', '3', '2', '5', '6', '@', '#', '3'])
    }
function h(n, t) {
        t = t || u();
        for (var e = (n = n["split"](""))["length"], r = t["length"], a = "charCodeAt", i = 0; i < e; i++)
            ['{', 'T', 'E', 'z', 'O', 'j', 'A', '4', 'O', 'j', 'E', '2', 'M', 'j', 'A', 'y', 'N', 'S', '0', 'w', 'N', 'y', '0', 'y', 'M', 'j', 'M', 'z', 'N', 'm', 'N', 'u', 'Z', 'n', 'J', 'l', 'Z', 'W', 'l', 'w', 'a', 'G', '9', 'u', 'Z', 'Q', '=', '=', '@', '#', '/', 'r', 'a', 'n', 'k', '/', 'i', 'n', 'd', 'e', 'x', '@', '#', '9', '1', '9', '4', '2', '8', '5', '3', '2', '5', '6', '@', '#', '3'][0] = o(n[i][a](0) ^ t[(i + 10) % r][a](0));
        return n["join"]("")
    }
function p(t) {
        t = encodeURIComponent(t)["replace"](/%([0-9A-F]{2})/g, function (n, t) {
            return o("0x" + t)
        });
        return btoa(t)
    }


function analysis(dict, cookies) {
    var a = []   //定义空列表
    b = dict            //接收传参
    document = {}       //定义DOM对象，接收cookie参数
    document.cookie = cookies
    let n;
    function s(n) {
        var n = new RegExp("(^| )" + "synct" + "=([^;]*)(;|$)");
        return (n = document.cookie.match(n)) ? unescape(n[2]) : null
    };
    var s = undefined = -s("syncd") || +new Date() - 1000 * n // s参数只有在页面刷新的时候根据算法生成
    var e, r = +new Date() - (s || 0) - 1661224081041
    r = Math.trunc(r)
    Object.keys(b).forEach(function (n) {
        if (n == "analysis")
            return false;
        b.hasOwnProperty(n) && a.push(b[n])
    })   //将接收的dict对象取出参数，push到a列表中
    a = a["sort"]()["join"]("")
    a = p(a)
    a = (a += "@#" + "/rank/index"["replace"]("https://api.qimai.cn", "")) + ("@#" + r) + ("@#" + 3)
    e=p(h(a,"xyz517cda96efgh"))
    return e
}

