#coding=utf-8
import urllib.request
import re
import os

'''
Urllib 模块提供了读取web页面数据的接口，我们可以像读取本地文件一样读取www和ftp上的数据
urlopen 方法用来打开一个url
read方法 用于读取Url上的数据
'''

def getHtml(url):
    page = urllib.request.urlopen(url);
    html = page.read();
    return html;

def getImg(html):
    imglist = re.findall('img src="(http.*?)"',html)
    return imglist

html = getHtml("http://www.dzhanfeng.com/Product-index.html").decode("utf-8");
imagesUrl = getImg(html);

if os.path.exists("E:/imags") == False:
    os.mkdir("E:/imags");
    
count = 0;
for url in imagesUrl:
    print(url)
    if(url.find('.') != -1):
        name = url[url.find('.',len(url) - 5):];
        bytes = urllib.request.urlopen(url);
        f = open("E:/imags/"+str(count)+name, 'wb');
        f.write(bytes.read());
        f.flush();
        f.close();
        count+=1;
