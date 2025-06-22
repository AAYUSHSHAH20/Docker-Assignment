FROM python:3.8-slim-buster

WORKDIR /flask-backend

COPY requirement.txt  requirement.txt

RUN pip install -r requirement.txt

COPY . .

ENV FLASK_APP=app.py

EXPOSE 5000

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]