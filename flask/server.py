from ast import parse
from flask import Flask, request, jsonify
import os

app = Flask(__name__)


@app.get('/')
def home():
    return jsonify('Welcome to Flask! Release - 0.0.2')


@app.get('/multiple/<param1>/<param2>')
def multiple(param1, param2):
    try:
        return jsonify({'number_1': param1, 'number_2': param2, 'result': int(param1) * int(param2)})
    except Exception:
        return jsonify("Invalid Request!")



if __name__ == "__main__":
    port = int(os.environ.get('PORT', 3100))
    app.run(debug=True, host='0.0.0.0', port=port)