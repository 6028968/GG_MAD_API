#!/usr/bin/env python3
from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app, resources={r"/fetch-data": {"origins": "http://localhost:8081"}})

@app.route('/fetch-data', methods=['GET'])
def fetch_data():
    try:
        with open('data.json', 'r') as file:
            data = json.load(file)
            return jsonify(data), 200
    except FileNotFoundError:
        return jsonify({"error": "File not found"}), 404
    except json.JSONDecodeError:
        return jsonify({"error": "Error parsing JSON"}), 500

if __name__ == '__main__':
    app.run(port=3000)
