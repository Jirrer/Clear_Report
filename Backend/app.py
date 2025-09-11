from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/test")
def test():
    return {"test": ["test1", "test2", "test3"]}



if __name__ == "__main__":
    app.run(port=5000, debug=True)