#-*_coding:utf8-*-
import requests
import re
import sys
import importlib

importlib.reload(sys)
#sys.setdefaultencoding("utf-8")

class func(object):
    def __init__(self):
        print ('开始爬取内容。。。')

#getsource获取网页源代码
    def getsource(self,url):
        html = requests.get(url)
        #print str(html.text)   可以在此打印，来检查是否抓到内容
        return html.text

#geteverydiv抓取每个课程块的信息
    def geteverydiv(self,source):
        everydiv = re.findall('(<div class="moco-course-wrap".*?</div>)',source,re.S)
        return everydiv

#getinfo从每个课程块中提取出课程标题和内容描述
    def getinfo(self,eachclass):
        info = {}
        info['title'] = re.search('<h3>(.*?)</h3>',eachclass,re.S).group(1)
        info['content'] = re.search('<p>(.*?)</p>',eachclass,re.S).group(1)
        #print info  可以在此打印，来检查是否抓到内容
        return info

#saveinfo用来保存结果到info.txt文件中
    def saveinfo(self,classinfo):
        f = open('info.txt','a')
        for each in classinfo:
            f.writelines('title:' + each['title'] + '\n')
            f.writelines('content:' + each['content'] + '\n\n')
        f.close()
        print ("write file finished")

#主函数
if __name__ == '__main__':
    classinfo = []
    url = 'http://www.imooc.com/'
    testspider = func()
    print (u'正在处理页面：') + url
    html = testspider.getsource(url)
    everydiv = testspider.geteverydiv(html)
    for each in everydiv:
        info = testspider.getinfo(each)
        classinfo.append(info)
    testspider.saveinfo(classinfo)
