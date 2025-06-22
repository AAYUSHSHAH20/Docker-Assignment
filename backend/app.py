from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json() or request.form
    name = data.get('name')
    email = data.get('email')
    
    # Process the form data as needed
    print(f"Received: Name={name}, Email={email}")

    return jsonify({'message': f'Thank you, {name}! We received your email: {email}'})

if __name__ == '__main__':
    app.run(debug=True)
