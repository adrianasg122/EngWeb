import requests
import sys
import time
import mysql.connector

conn = mysql.connector.connect(
        user='root',
        password='root',
        host='127.0.0.1',
        database='ess') 
cursor = conn.cursor()


def getCoinsDB():
    cursor.execute("Select id,symbol From Coin;")
    resultSet = cursor.fetchall()
    coinListDB = []
    for row in resultSet:
        coinListDB.append((row[0],row[1].encode("utf-8")))
    return coinListDB

"""
def verify(array):
    del array[0]
    for orcid in array:
        if (len(orcid)!=19):
            print ("Orcid with invalid format!")
            return False
        for i in range(len(orcid)):
            if (i==4 or i==9 or i==14):
                if (orcid[i]!="-"):
                    print ("Orcid with invalid format!")
                    return False
            elif (not orcid[i].isdigit()):
                print ("Orcid with invalid format!")
                return False
    return True
"""


def listCoin():
    for (id,symbol) in coinList:
        print (symbol)

def addORCID(listaCoin):
    for symbol in listaCoin:
        if (not coinList.__contains__(symbol)):
            cursor.execute("Insert into ess.Coin(id) values (\""+symbol+"\");")
            conn.commit()
            print (symbol+" inserted.")
        else:
            print (symbol+" already exists.")


def remORCID(listaCoin):
    for coin in listaCoin:
        if (coinList.__contains__(symbol)):
            cursor.execute("Delete from ess.Coin where symbol=\""+symbol+"\";")
            conn.commit()
            print (symbol+ " removed.")
        else:
            print (symbol+ " doesnt exist.")
"""

def instructions():
    print ("HELP:")
    print ("\tStart background syncing process:")
    print ("\t\tpython background")
    print ("\tList ORCID being analyzed:")
    print ("\t\tpython background -l")
    print ("\tAdd ORCID('s) to be analyzed:")
    print ("\t\tpython background -a XXXX-XXXX-XXXX-XXXX")
    print ("\t\tpython background -a XXXX-XXXX-XXXX-XXXX YYYY-YYYY-YYYY-YYYY ZZZZ-ZZZZ-ZZZZ-ZZZZ")
    print ("\tRemove ORCID('s) from being analyzed:")
    print ("\t\tpython background -r XXXX-XXXX-XXXX-XXXX")
    print ("\t\tpython background -r XXXX-XXXX-XXXX-XXXX YYYY-YYYY-YYYY-YYYY ZZZZ-ZZZZ-ZZZZ-ZZZZ")
"""

def background():
    cursor.execute("Delete from ess.Coin;")
    conn.commit()
    global coinList
    i = 0
    while(True):
        cursor.execute("Delete from ess.Coin;")
        #for (id,symbol) in coinList:
        headers = {'content-type': 'application/json', 'Accept-Charset': 'UTF-8'}
        r = requests.get('https://api.coinmarketcap.com/v1/ticker/',headers=headers)
        reqJson = r.json()
        for i in range(len(reqJson)):
            workFL = []
            print reqJson[i]["name"],"--",reqJson[i]["price_usd"],"--",reqJson[i]["percent_change_24h"] ; 
            
            """
            # Verifica se alguma das referencias de um artigo tem ligacao ao scopus se tiver adiciona a lista WorkFL
            for work in art["work-summary"]:
                for eid in work["external-ids"]["external-id"]:
                    if (eid["external-id-type"]=="eid"):
                        workFL.append(work)
            if (workFL == []):
                # Caso nenhuma das referencias esteja ligada ao scopus apenas guarda o titulo
                artTitle = art["work-summary"][0]["title"]["title"]["value"]
                saveWithoutScopus(idArt, id, artTitle)
                idArt+=1
            else:
                # Caso hajam varias referencias com ligacao ao scopus analisa a que tem display-index menor
                workF = workFL[0]
                for work in workFL:
                    if (int(work["display-index"]) < int(workF["display-index"])):
                        workF = work
                saveWithScopus(idArt,id,art["last-modified-date"]["value"],workF)                    
            """
            i+=1
        conn.commit()
        coinList = getCoinsDB()
        time.sleep(5)


"""
def saveWithoutScopus(idArt,idorcid, artTitle):
    print (str(idorcid) + "|-|" + artTitle)
"""
"""
def saveWithScopus(idArt,idorcid,lastModDate,work):
    artTitle = work["title"]["title"]["value"]
    year = work["publication-date"]["year"]["value"]
    scopusID = ""
    for eid in work["external-ids"]["external-id"]:
        if (eid["external-id-type"]=="eid"):
            scopusID = eid["external-id-value"]
    print ((str(idorcid) + "||" + artTitle + "||" + year + "||" + str(lastModDate) + "||" + scopusID).encode("utf-8"))
#    headers = {'content-type': 'application/json', 'Accept-Charset': 'UTF-8'}
#    r = requests.get('https://api.elsevier.com/content/abstract/citations?scopus_id=' + scopusID + '&apiKey=4bea4f758eda4188f6923c7a4c851380&httpAccept=application%2Fjson',headers=headers)
#    reqJson = r.json()
#    print reqJson
    cursor.execute("Insert into si.Article (idArticle, lastDate, title, year) values ("+str(idArt)+","+str(lastModDate)+",\""+artTitle+"\","+year+");")
    cursor.execute("Insert into si.Orc_Article (idArticle, idOrc) values (\""+str(idArt)+"\",\""+str(idorcid)+"\");")
"""


"""
def insert(id,name,symbol,price, percentageChange,lastModDate):
#    headers = {'content-type': 'application/json', 'Accept-Charset': 'UTF-8'}
#    r = requests.get('https://api.elsevier.com/content/abstract/citations?scopus_id=' + scopusID + '&apiKey=4bea4f758eda4188f6923c7a4c851380&httpAccept=application%2Fjson',headers=headers)
#    reqJson = r.json()
#    print reqJson
    cursor.execute("Insert into ess.Coin (id, name, symbol, price , percentageChange , lastModDate) values ("+str(id)+","+name+","+symbol+","+str(price)+","+str(percentageChange)+","+str(lastModDate)");")
   """ 





                    







coinList = getCoinsDB()
array = sys.argv
del array[0]

if (len(array)==0):
    background()
#elif (array[0]=="-l"):
 #   listORCID()
#elif (array[0]=="-a" and verify(array)):
  #  addORCID(array)
#elif (array[0]=="-r" and verify(array)):
   # remORCID(array)
else:
    instructions()