import execjs
# print(execjs.get())


with open('3.pyexec执行的js代码.js', 'r') as f:
    jscode = f.read()

#第一种执行方法，使用js.call('函数名'，参数1，参数2，*)
js=execjs.compile(jscode)
data1=js.call('aa',2,3)
print(data1)
#第二种调用方法 eval调用
data2=js.eval('aa(3,5)')
print(data2)