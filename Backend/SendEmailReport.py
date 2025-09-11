import sqlite3
from dotenv import load_dotenv
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import smtplib

load_dotenv()

def sendReports(userName):
    userInformation = pullUserInformation(userName) 
    userEmail, userScreenTime = userInformation[0], userInformation[1]

    scriptUserName = os.getenv("EMAIL_USERNAME")
    scriptPassword = os.getenv("EMAIL_PASSWORD")

    message = generateEmailMessage(userScreenTime)

    msg = MIMEMultipart()
    msg["Subject"] = f"Screen Time Report"
    msg["To"] = userEmail
    msg["From"] = scriptUserName

    msg.attach(MIMEText(message))

    with smtplib.SMTP('smtp.gmail.com', 587) as server:
        server.starttls()
        server.login(scriptUserName, scriptPassword)
        server.send_message(msg)


def pullUserInformation(userName): # need to pull screen time too
    with sqlite3.connect('Backend/ClearReportDB.db') as connection:
        cursor = connection.cursor()
        cursor.execute("SELECT email, screenTime FROM users WHERE username = ?", (userName,))
        return cursor.fetchone()
    
def generateEmailMessage(screenTime):
    message = f'This is a test message.\n You had {screenTime} hrs of screen time.'

    return message

sendReports('admin 1')