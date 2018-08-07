import urllib.request
import http.cookiejar
 
# 创建cookie容器
cj = http.cookiejar.CookieJar()
# 创建opener
opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))
# 给urllib.request安装opener
urllib.request.install_opener(opener)
 
# 请求
request = urllib.request.Request('http://www.baidu.com/')
response = urllib.request.urlopen(request)
buff = response.read()
html = buff.decode("utf8")

print(soup.find_all('a'))
print(soup.find('a'))
print(soup.find(class_='title'))
print(soup.find(id="link3"))
print(soup.find('p',class_='title'))
