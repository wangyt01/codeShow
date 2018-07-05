def get_detail():
    detail_links=detail_list()
    names=[]
    for detail in detail_links:
        r=requests.get(detail)
        soup=BeautifulSoup(r.text,'lxml')
        content=soup.find('div',{'class':'profile-head'})
        if content is None:
            continue
        for name in content.find_all('h2'):
            names.append(name)

