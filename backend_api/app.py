from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

from chat import get_response

app = Flask(__name__)

# CORS allows flask API to run independantly of the frontend, don't need to set home route
CORS(app)

# @app.get("/")
# def index_get():
#     return render_template("base.html")

@app.post("/predict")
def predict():
    text = request.get_json().get("message")
    response = get_response(text)
    message = {"answer": response}

    return jsonify(message)

if __name__ == "__main__":
    app.run(debug=True)