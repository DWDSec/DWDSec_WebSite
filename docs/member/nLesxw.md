# nLesxw
::: tip 简介
\
*web地板砖选手。* \
*每天都想的搞一些好玩的事，又菜又爱玩代言人。*\
*理想是成为大嘿阔，目前在学调查取证。*
:::

## 调查取证
::: tip windows
*在注册表中隐藏着许多不为人知的秘密* \
*[python的winreg库的学习链接](https://www.oulub.com/Python/library.winreg)*
:::

```python
from winreg import *
def printNets():
    net = "SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\NetworkList\\Signatures\\Unmanaged"
    key = OpenKey(HKEY_LOCAL_MACHINE, net)   #打开该目录，返回所有句柄
    print('test:')
    count = 0
    while True:
        try:
            guid = EnumKey(key, count)     #枚举每个句柄，返回该句柄的键
            netKey = OpenKey(key, str(guid))
            # 枚举打开注册表项的值，并返回一个元组，第一个参数为键，第二个参数为索引
            (n, addr, t) = EnumValue(netKey, 5)    #获取DefaultGatewayMac的数据，即获取该wifi的mac地址，返回为十六进制
            (n, name, t) = EnumValue(netKey, 4)    #获取FirstNetwork的数据，即获取wifi的名称
            #判断是否有mac地址
            if addr:
                macAddr = val2addr(addr)
            else:
                macAddr = 'None'
            netName = str(name)
            print('[+]' + netName + ' ' + macAddr)
            CloseKey(netKey)     #获取一个句柄内容后，关闭句柄
            count += 1
        except OSError:       #如果没有可迭代的内容就结束循环
            break
#对句柄下的mac地址数据，以常见的形式返回
def val2addr(val):
    addr = ""
    #print(val.hex())
    n = 0
    for i in val.hex():
        addr += '{}'.format(i)
        n += 1
        if n%2 == 0:
            addr += ':'
    return addr.rstrip(':')

def main():
    printNets()

if __name__ == "__main__":
    main()
```