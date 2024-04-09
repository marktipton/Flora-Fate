from flask import Blueprint, render_template
from flask_login import current_user


views = Blueprint('views', __name__)


@views.route('/login')
def login():
    return render_template("login.html", user=current_user)


@views.route('/')
def home():
    return render_template("homepage.html", user=current_user)
