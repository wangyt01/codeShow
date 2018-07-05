'''
第一个示例：简单的网页爬虫
爬取豆瓣首页
'''

import urllib.request

#网址
url = "http://www.douban.com/"

#请求
request = urllib.request.Request(url)

#爬取结果
response = urllib.request.urlopen(request)

data = response.read()

#设置解码方式
data = data.decode('utf-8')

html = getHtml("https://www.douban.com/photos/album/1641361458/")  
saveHtml("text1",html)  
  
print ("结束")