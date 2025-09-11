from flask import Flask, jsonify, request
from flask_cors import CORS
from SendEmailReport import sendReports


app = Flask(__name__)
CORS(app)

@app.route("/test")
def test():
    return {"test": ["test1", "test2", "test3"]}

@app.route("/SendEmailToUser")
def SendEmailToUser():
    sendReports('admin 1') # <- hard coded in my email
    return jsonify({"Email Report Status": "success"})



if __name__ == "__main__":
    app.run(port=5000, debug=True)