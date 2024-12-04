from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/feedback', methods=['POST'])
def feedback():
    data = request.json
    print("Feedback received:", data)  # Log feedback for development
    return jsonify({"message": "Thank you for your feedback!"})

if __name__ == "__main__":
    app.run(debug=True)
