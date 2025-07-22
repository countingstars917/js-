import subprocess

res=subprocess.run(['python','demo.py']) #返回终端输出的信息

print(res.stdout)