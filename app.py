from flask import Flask
from flask import request, redirect, url_for
from flask import render_template
app = Flask(__name__)
app.debug = True
#az index fugvnveny rendeleli le az index.html file-t
#a / oldalon get és post methodokat is engedünk
# https://www.w3schools.com/tags/ref_httpmethods.asp
#EZ NEM IGAZI BEJELENTKEZŐ FELÜLET így nem szabad csinálni
#
validuser = "Ricshardson"
@app.route("/", methods=['GET', 'POST'] )
# egy error változót deklarálunk aminek a kezdő értékén NONE (azaz semmi)
def index():
	error = None
	# ha ez a page ugy van meghivva hogy a kliens POSTOT küld
	if request.method == 'POST':
		#a login.html-ben lévő form adatokat kiszedjük a POST-ból és betöltjük
		#két darab változóba
		email = request.form.get('email')
		passwd = request.form.get('password')
		print(email)
		print(passwd)
		#a beküldött adatok közül ellenőrizzük a felhasználónevet és ha az megegyezik
		if email == validuser:
			#átirányítjuk a felhasználónevet a belső oldalra
			return redirect(url_for('nyilvantarto'))
		else:
			#ha rossz adatokat adott meg, akkor egy hibaüzenetet küldünk
			error = 'Invalid Credentials. Please try again'
			#flask minden template file-t a templates mappán belül
			#ha nem POST a http kérés hanem GET akkor simán csak a login.html rendereljük
	return render_template('login.html', error=error)




@app.route("/nyilvantarto")
def nyilvantarto():
	user = validuser
	#a user változó, az az index.html file-ban is user változóként lesz elérhető
	return render_template('index.html', user=user)

if __name__ == "__main__":
	 app.run(host='0.0.0.0')


















