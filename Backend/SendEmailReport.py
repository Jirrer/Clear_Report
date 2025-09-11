import sqlite3


def sendReports(userName):
    userInformation = pullUserInformation(userName) 
    userEmail = userInformation[0]

    #send email here

    print(userInformation)

def pullUserInformation(userName): # need to pull screen time too
    with sqlite3.connect('Backend/ClearReportDB.db') as connection:
        cursor = connection.cursor()
        cursor.execute("SELECT email FROM users WHERE username = ?", (userName,))
        return cursor.fetchone()

sendReports('admin 1')