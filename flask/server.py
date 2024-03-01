from flask import Flask, jsonify
import os

app = Flask(__name__)


@app.route('/')
def home():
    return jsonify('Welcome to Flask! Release - 0.0.1')


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 3100))
    app.run(debug=True, host='0.0.0.0', port=port)