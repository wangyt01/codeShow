import urllib.request
import re
def getHtml(url):
    page = urllib.request.urlopen(url)
    html = page.read()
    html = html.decode('GBK')
    return html
def getMeg(html):
    reg = re.compile(r'******')
    meglist = re.findall(reg,html)
    for meg in meglist:
        with open('out.txt',mode='a',encoding='utf-8') as file:
            file.write('%s\n' % meg)
if __name__ == "__main__":
    html = getHtml(url)
    getMeg(html)

