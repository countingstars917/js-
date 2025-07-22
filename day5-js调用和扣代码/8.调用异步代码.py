from wsgiref.util import request_uri

import requests

# with open('7.js异步代码调用.js',encoding='utf-8') as f:
#     jscode = f.read()
#
# js=execjs.compile(jscode)
# js.call('getAsyncDate',123)
# 错误的调用方式。

res=requests.get("http://127.0.0.1:8080/user?aaa=23334")
print(res.text)
