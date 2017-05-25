from flask import Flask
from flask import render_template
app = Flask(__name__)
app.debug = True
#az index fugvnveny rendeleli le az index.html file-t


@app.route("/")
def index():
	user = "Ricshardson"
	#a user változó, az az index.html file-ban is user változóként lesz elérhető
	return render_template('index.html', user=user)




@app.route("/login")
def loginPage():
	return render_template('login.html')

if __name__ == "__main__":
	 app.run(host='0.0.0.0', debug=True)


















