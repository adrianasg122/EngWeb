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
    cursor.execute("SELECT id,symbol FROM Coin;")
    resultSet = cursor.fetchall()
    coinListDB = []
    for row in resultSet:
        coinListDB.append((row[0],row[1].encode("utf-8")))
    return coinListDB



def background():
    conn.commit()
    global coinList
    i = 0
    while(True):
        headers = {'content-type': 'application/json', 'Accept-Charset': 'UTF-8'}
        r = requests.get('https://api.coinmarketcap.com/v1/ticker/',headers=headers)
        reqJson = r.json()
        for i in range(len(reqJson)):
            print reqJson[i]["id"],"--",reqJson[i]["price_usd"],"--",reqJson[i]["percent_change_24h"]
            qid = reqJson[i]["id"]
            qname = reqJson[i]["name"]
            qsymbol = reqJson[i]["symbol"]
            qprice = reqJson[i]["price_usd"]
            qask= reqJson[i]["price_usd"]
            qbid= reqJson[i]["price_usd"] 
            qperc = reqJson[i]["percent_change_1h"]
            qlastMod = reqJson[i]["last_updated"] 
            cursor.execute("REPLACE INTO Coin values (%s,%s,%s,%s,%s,%s,%s,%s)", (qid, qname, qsymbol, qprice, qperc, qlastMod,qask,qbid))
            i+=1
            conn.commit()
        coinList = getCoinsDB()
        time.sleep(5)


coinList = getCoinsDB()
array = sys.argv
del array[0]

if (len(array)==0):
    background()
