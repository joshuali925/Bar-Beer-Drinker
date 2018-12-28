from flask import Flask
from flask import jsonify
from flask import make_response
from flask import request
from flask import redirect
from flask import render_template
import json

from BarBeerDrinker import database

app = Flask(__name__)


@app.route('/')
def hello_world():
    return redirect('/static/index.html')
@app.route('/home')
def home_route():
    return redirect('/static/index.html')

@app.route('/bars')
def bars_route():
    return redirect('/static/bars/index.html')
@app.route('/beers')
def beers_route():
    return redirect('/static/beers/index.html')
@app.route('/drinkers')
def drinkers_route():
    return redirect('/static/drinkers/index.html')
@app.route('/query')
def query_route():
    return redirect('/static/query/index.html')


@app.route('/api/any-query/<query>', methods=["GET"])
def any_query(query):
    return jsonify(database.any_query(query))

@app.route('/api/bar/', methods=["GET"])
def get_bars():
    return jsonify(database.get_bars())

@app.route('/api/drinker/', methods=["GET"])
def get_drinkers():
    return jsonify(database.get_drinkers())

@app.route('/api/beer/', methods=["GET"])
def get_beers():
    return jsonify(database.get_beers())

@app.route('/api/bar/<name>', methods=["GET"])
def find_bar(name):
    if name is None:
        raise ValueError("Bar is not specified.")
    bar = database.find_bar(name)
    if bar is None:
        return make_response("No bar found with the given name.", 404)
    return jsonify(bar)


@app.route('/api/drinker/<name>', methods=["GET"])
def find_drinker(name):
    if name is None:
        raise ValueError("Drinker is not specified.")
    drinker = database.find_drinker(name)
    if drinker is None:
        return make_response("No drinker found with the given name.", 404)
    return jsonify(drinker)

@app.route('/api/beer/<name>', methods=["GET"])
def find_beer(name):
    if name is None:
        raise ValueError("Beers is not specified.")
    beer = database.find_beer(name)
    if beer is None:
        return make_response("No beer found with the given name.", 404)
    return jsonify(beer)


@app.route('/api/frequents-data', methods=['GET'])
def get_bar_frequent_counts():
    try:
        return jsonify(database.get_bar_frequent_counts())
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/bill/<name>', methods=['GET'])
def get_bills(name):
    try:
        return jsonify(database.get_bills(name))
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/beers-ordered-most/<name>', methods=['GET'])
def get_beers_ordered_most(name):
    try:
        return jsonify(database.get_beers_ordered_most(name))
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/largest-squanders/<name>', methods=['GET'])
def get_largest_squanders(name):
    try:
        return jsonify(database.get_largest_squanders(name))
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/popular-beers/<name>', methods=['GET'])
def get_popular_beers(name):
    try:
        return jsonify(database.get_popular_beers(name))
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/popular-manfs/<name>', methods=['GET'])
def get_popular_manfs(name):
    try:
        return jsonify(database.get_popular_manfs(name))
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/popular-bars-for-beer/<name>', methods=['GET'])
def get_popular_bars_for_beer(name):
    try:
        return jsonify(database.get_popular_bars_for_beer(name))
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/biggest-consumers/<name>', methods=['GET'])
def get_biggest_consumers(name):
    try:
        return jsonify(database.get_biggest_consumers(name))
    except Exception as e:
        return make_response(str(e), 500)



@app.route('/api/spending-in-bars/<name>', methods=['GET'])
def get_spending_in_bars(name):
    try:
        return jsonify(database.get_spending_in_bars(name))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/spending-vs-hour/<name>', methods=['GET'])
def get_spending_vs_hour(name):
    try:
        return jsonify(database.get_spending_vs_hour(name))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/spending-vs-day-of-week/<name>', methods=['GET'])
def get_spending_vs_day_of_week(name):
    try:
        return jsonify(database.get_spending_vs_day_of_week(name))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/spending-vs-month/<name>', methods=['GET'])
def get_spending_vs_month(name):
    try:
        return jsonify(database.get_spending_vs_month(name))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/sales-vs-hour/<name>', methods=['GET'])
def get_sales_vs_hour(name):
    try:
        return jsonify(database.get_sales_vs_hour(name))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/sales-vs-day-of-week/<name>', methods=['GET'])
def get_sales_vs_day_of_week(name):
    try:
        return jsonify(database.get_sales_vs_day_of_week(name))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/sales-vs-month/<name>', methods=['GET'])
def get_sales_vs_month(name):
    try:
        return jsonify(database.get_sales_vs_month(name))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/quantity-vs-hour/<name>', methods=['GET'])
def get_quantity_vs_hour(name):
    try:
        return jsonify(database.get_quantity_vs_hour(name))
    except Exception as e:
        return make_response(str(e), 500)
        
@app.route('/api/quantity-vs-day-of-week/<name>', methods=['GET'])
def get_quantity_vs_day_of_week(name):
    try:
        return jsonify(database.get_quantity_vs_day_of_week(name))
    except Exception as e:
        return make_response(str(e), 500)
        
@app.route('/api/quantity-vs-month/<name>', methods=['GET'])
def get_quantity_vs_month(name):
    try:
        return jsonify(database.get_quantity_vs_month(name))
    except Exception as e:
        return make_response(str(e), 500)
