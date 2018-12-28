from sqlalchemy import create_engine
from sqlalchemy import sql
import decimal
# from BarBeerDrinker import config

database_uri = "mysql+pymysql://username:password@localhost:3306/project"


engine = create_engine(database_uri)

def any_query(query):
    result = [None] * 5  # isSuccess, isSelect, rowcount, keys, data
    with engine.connect() as con:
        try:
            rs = con.execute(query)
        except Exception as e:
            result[0] = False
            result[1] = str(e)
            return result
        result[0] = True
        result[1] = rs.returns_rows
        result[2] = rs.rowcount
        if rs.returns_rows:
            result[3] = rs.keys()
            rs = [list(row) for row in rs]
            for i in range(len(rs[0])):
                if isinstance(rs[0][i], decimal.Decimal):
                    for j in range(len(rs)):
                        rs[j][i] = float(rs[j][i])
            result[4] = rs
        return result

# s = any_query("UPDATE bars set phone='770-550-5748' where name='Anderson, Kuvalis and Miller'")
# 
# s.returns_rows = False if modify
# s.rowcount = matched rows

def hour_to_string(n):
    if n < 12:
        return str(n) + " AM"
    if n == 12:
        return str(n) + " PM"
    return str(n - 12) + " PM"

def string_to_hour(s):
    n = int(s.split(' ')[0])
    if "AM" in s:
        return n
    if n == 12:
        return n
    return n + 12

def get_bars():
    with engine.connect() as con:
        rs = con.execute("SELECT * FROM bars;")
        rs = [dict(row) for row in rs]
        for i in range(len(rs)):
            rs[i]['open_hour'] = hour_to_string(rs[i]['open_hour'])
            rs[i]['close_hour'] = hour_to_string(rs[i]['close_hour'])
        return rs
            

def find_bar(name):
    with engine.connect() as con:
        query = sql.text("SELECT * FROM bars WHERE name like :name;")
        name = "%"+name+"%"
        rs = con.execute(query, name=name)
        rs = [dict(row) for row in rs]
        for i in range(len(rs)):
            rs[i]['open_hour'] = hour_to_string(rs[i]['open_hour'])
            rs[i]['close_hour'] = hour_to_string(rs[i]['close_hour'])
        return rs

def get_drinkers():
    with engine.connect() as con:
        rs = con.execute("SELECT * FROM drinkers;")
        return [dict(row) for row in rs]
        
def find_drinker(name):
    with engine.connect() as con:
        query = sql.text("SELECT * FROM drinkers WHERE name like :name;")
        name = "%"+name+"%"
        rs = con.execute(query, name=name)
        return [dict(row) for row in rs]

def get_beers():
    with engine.connect() as con:
        rs = con.execute("SELECT * FROM items;")
        return [dict(row) for row in rs]
        
def find_beer(name):
    with engine.connect() as con:
        query = sql.text("SELECT * FROM items WHERE name like :name;")
        name = "%"+name+"%"
        rs = con.execute(query, name=name)
        return [dict(row) for row in rs]
        
def get_bills(name):
    with engine.connect() as con:
        query = sql.text('select * from bills where drinker_name=:name ORDER BY bar_name asc, time asc;')
        rs = con.execute(query, name=name)
        rs = [dict(row) for row in rs]
        for i in range(len(rs)):
            rs[i]['total'] = float(rs[i]['total'])
            rs[i]['tip'] = float(rs[i]['tip'])
            rs[i]['tax'] = float(rs[i]['tax'])
        return rs
        
def get_beers_ordered_most(drinker_name):
    with engine.connect() as con:
        query = sql.text('select sum(c.item_quantity) as total_quantity, b.drinker_name, c.item_name from bills b, contains c where drinker_name=:drinker_name and b.transaction_id=c.transaction_id group by c.item_name order by total_quantity DESC limit 5;')
        rs = con.execute(query, drinker_name=drinker_name)
        rs = [dict(row) for row in rs]
        for i in range(len(rs)):
            rs[i]['total_quantity'] = int(rs[i]['total_quantity'])
        return rs

def get_largest_squanders(bar_name):
    with engine.connect() as con:
        query = sql.text('select drinker_name, sum(total) as total_amount from bills where bar_name=:bar_name group by drinker_name order by total_amount DESC limit 5;')
        rs = con.execute(query, bar_name=bar_name)
        rs = [dict(row) for row in rs]
        for i in range(len(rs)):
            rs[i]['total_amount'] = float(rs[i]['total_amount'])
        return rs
        
def get_popular_beers(bar_name):
    with engine.connect() as con:
        query = sql.text('select c.item_name, sum(c.item_quantity) as total_quantity from bills b, contains c where bar_name=:bar_name and b.transaction_id=c.transaction_id group by c.item_name order by total_quantity desc limit 5;')
        rs = con.execute(query, bar_name=bar_name)
        rs = [dict(row) for row in rs]
        for i in range(len(rs)):
            rs[i]['total_quantity'] = int(rs[i]['total_quantity'])
        return rs
        
def get_popular_manfs(bar_name):
    with engine.connect() as con:
        query = sql.text('select i.manufacture, count(s.item_name) as total_quantity from sells s, items i where bar_name=:bar_name and s.item_name=i.name group by i.manufacture order by total_quantity desc limit 5;')
        rs = con.execute(query, bar_name=bar_name)
        rs = [dict(row) for row in rs]
        for i in range(len(rs)):
            rs[i]['total_quantity'] = int(rs[i]['total_quantity'])
        return rs
        
def get_popular_bars_for_beer(beer_name):
    with engine.connect() as con:
        query = sql.text('select b.bar_name, sum(c.item_quantity) as total_quantity from bills b, contains c where c.item_name=:beer_name and b.transaction_id=c.transaction_id group by b.bar_name order by total_quantity desc limit 5;')
        rs = con.execute(query, beer_name=beer_name)
        rs = [dict(row) for row in rs]
        for i in range(len(rs)):
            rs[i]['total_quantity'] = int(rs[i]['total_quantity'])
        return rs

def get_biggest_consumers(beer_name):
    with engine.connect() as con:
        query = sql.text('select b.drinker_name, sum(c.item_quantity) as total_quantity from bills b, contains c where c.item_name=:beer_name and b.transaction_id=c.transaction_id group by b.drinker_name order by total_quantity desc limit 5;')
        rs = con.execute(query, beer_name=beer_name)
        rs = [dict(row) for row in rs]
        for i in range(len(rs)):
            rs[i]['total_quantity'] = int(rs[i]['total_quantity'])
        return rs



"""for drinker details"""
def get_spending_in_bars(drinker_name):
    with engine.connect() as con:
        query = sql.text('select bar_name, sum(total) as total from bills where drinker_name=:drinker_name group by bar_name;')
        rs = con.execute(query, drinker_name=drinker_name)
        rs = [dict(row) for row in rs]
        for i in range(len(rs)):
            rs[i]['total'] = float(rs[i]['total'])
        return rs

def get_spending_vs_hour(drinker_name):
    with engine.connect() as con:
        query = sql.text('select hour(time) as hour, sum(total) as total from bills where drinker_name=:drinker_name group by hour;')
        rs = con.execute(query, drinker_name=drinker_name)
        rs = [dict(row) for row in rs]
        hours = [dict([('hour', hour_to_string(i)), ('total', 0)]) for i in range(24)]
        for i in rs:
            hours[i['hour']]['total'] = float(i['total'])
        return hours
        
def get_spending_vs_day_of_week(drinker_name):
    with engine.connect() as con:
        query = sql.text('select day_of_week, sum(total) as total from bills where drinker_name=:drinker_name group by day_of_week;')
        rs = con.execute(query, drinker_name=drinker_name)
        rs = [dict(row) for row in rs]
        weekdays = {'Monday':0, 'Tuesday':1, 'Wednesday':2, 'Thursday':3, 'Friday':4, 'Saturday':5, 'Sunday':6}
        days = [dict([('day_of_week', i), ('total', 0)]) for i in weekdays.keys()]
        for i in rs:
            days[weekdays[i['day_of_week']]]['total'] = float(i['total'])
        return days

def get_spending_vs_month(drinker_name):
    with engine.connect() as con:
        query = sql.text('select month(time) as month, sum(total) as total from bills where drinker_name=:drinker_name group by month(time);')
        rs = con.execute(query, drinker_name=drinker_name)
        rs = [dict(row) for row in rs]
        month_names = ('January', 'Feburary', 'March', 'April', 'May', 'June','July','August', 'September','October','November','December')
        months = [dict([('month', i), ('total', 0)]) for i in month_names]
        for i in rs:
            months[i['month']-1]['total'] = float(i['total'])
        return months

"""for bar details"""
def get_sales_vs_hour(bar_name):
    with engine.connect() as con:
        query = sql.text('select hour(b.time) as hour, sum(c.item_quantity*s.price) as total from bills b, contains c, sells s where b.bar_name=:bar_name and b.transaction_id=c.transaction_id and b.bar_name=s.bar_name and c.item_name=s.item_name group by hour;')
        rs = con.execute(query, bar_name=bar_name)
        rs = [dict(row) for row in rs]
        hours = [dict([('hour', hour_to_string(i)), ('total', 0)]) for i in range(24)]
        for i in rs:
            hours[i['hour']]['total'] = float(i['total'])
        return hours

def get_sales_vs_day_of_week(bar_name):
    with engine.connect() as con:
        query = sql.text('select day_of_week, sum(c.item_quantity*s.price) as total from bills b, contains c, sells s where b.bar_name=:bar_name and b.transaction_id=c.transaction_id and b.bar_name=s.bar_name and c.item_name=s.item_name group by day_of_week;')
        rs = con.execute(query, bar_name=bar_name)
        rs = [dict(row) for row in rs]
        weekdays = {'Monday':0, 'Tuesday':1, 'Wednesday':2, 'Thursday':3, 'Friday':4, 'Saturday':5, 'Sunday':6}
        days = [dict([('day_of_week', i), ('total', 0)]) for i in weekdays.keys()]
        for i in rs:
            days[weekdays[i['day_of_week']]]['total'] = float(i['total'])
        return days

def get_sales_vs_month(bar_name):
    with engine.connect() as con:
        query = sql.text('select month(time) as month, sum(c.item_quantity*s.price) as total from bills b, contains c, sells s where b.bar_name=:bar_name and b.transaction_id=c.transaction_id and b.bar_name=s.bar_name and c.item_name=s.item_name group by month;')
        rs = con.execute(query, bar_name=bar_name)
        rs = [dict(row) for row in rs]
        month_names = ('January', 'Feburary', 'March', 'April', 'May', 'June','July','August', 'September','October','November','December')
        months = [dict([('month', i), ('total', 0)]) for i in month_names]
        for i in rs:
            months[i['month']-1]['total'] = float(i['total'])
        return months

"""for beer details"""
def get_quantity_vs_hour(beer_name):
    with engine.connect() as con:
        query = sql.text('select hour(b.time) as hour, sum(c.item_quantity) as total_quantity from bills b, contains c where c.item_name=:beer_name and b.transaction_id=c.transaction_id group by hour;')
        rs = con.execute(query, beer_name=beer_name)
        rs = [dict(row) for row in rs]
        hours = [dict([('hour', hour_to_string(i)), ('total_quantity', 0)]) for i in range(24)]
        for i in rs:
            hours[i['hour']]['total_quantity'] = int(i['total_quantity'])
        return hours

def get_quantity_vs_day_of_week(beer_name):
    with engine.connect() as con:
        query = sql.text('select day_of_week, sum(c.item_quantity) as total_quantity from bills b, contains c where c.item_name=:beer_name and b.transaction_id=c.transaction_id group by day_of_week;')
        rs = con.execute(query, beer_name=beer_name)
        rs = [dict(row) for row in rs]
        weekdays = {'Monday':0, 'Tuesday':1, 'Wednesday':2, 'Thursday':3, 'Friday':4, 'Saturday':5, 'Sunday':6}
        days = [dict([('day_of_week', i), ('total', 0)]) for i in weekdays.keys()]
        for i in rs:
            days[weekdays[i['day_of_week']]]['total_quantity'] = int(i['total_quantity'])
        return days

def get_quantity_vs_month(beer_name):
    with engine.connect() as con:
        query = sql.text('select month(time) as month, sum(c.item_quantity) as total_quantity from bills b, contains c where c.item_name=:beer_name and b.transaction_id=c.transaction_id group by month;')
        rs = con.execute(query, beer_name=beer_name)
        rs = [dict(row) for row in rs]
        month_names = ('January', 'Feburary', 'March', 'April', 'May', 'June','July','August', 'September','October','November','December')
        months = [dict([('month', i), ('total_quantity', 0)]) for i in month_names]
        for i in rs:
            months[i['month']-1]['total_quantity'] = int(i['total_quantity'])
        return months

