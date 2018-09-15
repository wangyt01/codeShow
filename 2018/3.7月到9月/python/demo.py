import urllib.request
resp=urllib.request.urlopen('http://www.sdnje.com/cpzs')
html=resp.read()
print(html)
