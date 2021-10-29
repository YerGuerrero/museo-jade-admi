import flask
from flask_cors import CORS
import json
from flask import jsonify, request
import psycopg2 
import os

app = flask.Flask(__name__)
CORS(app, support_credentials=True, resources={r"/*": {"origins": "*"}})
app.config["DEBUG"] = True

@app.route('/read_news', methods=['GET'])
def read_news():
    meta = read_news()
    response = jsonify(meta)
    return response

@app.route('/post_createNews', methods=['POST'])
def post_createNews():
    print (json.loads(request.data))
    insert_news(json.loads(request.data))
    return jsonify({"step": "1"})

@app.route('/post_deleteNews', methods=['POST'])
def post_deleteNews():
    print (json.loads(request.data))
    delete_news(json.loads(request.data))
    return jsonify({"step": "1"})

@app.route('/post_updateNews', methods=['POST'])
def post_updateNews():
    print (json.loads(request.data))
    update_news(json.loads(request.data))
    return jsonify({"step": "1"})

@app.route('/read_events', methods=['GET'])
def read_events():
    meta = read_events()
    response = jsonify(meta)
    return response

@app.route('/post_createEvents', methods=['POST'])
def post_createEvents():
    print (json.loads(request.data))
    insert_events(json.loads(request.data))
    return jsonify({"step": "1"})

@app.route('/post_deleteEvents', methods=['POST'])
def post_deleteEvents():
    print (json.loads(request.data))
    delete_events(json.loads(request.data))
    return jsonify({"step": "1"})

@app.route('/post_updateEvents', methods=['POST'])
def post_updateEvents():
    print (json.loads(request.data))
    update_events(json.loads(request.data))
    return jsonify({"step": "1"})


dbconn = {'database': 'museojadedb',
          'user': 'admin',
          'port': '5432',
          'host':'localhost',
          'password':'museoJadeAdmin'}

pg_conn = psycopg2.connect(**dbconn)
pg_cur = pg_conn.cursor()

def read_news():
    sql = """SELECT id, titulo, imagen, descripcion
	FROM public.noticias;"""
    pg_cur.execute(sql)
    data = pg_cur.fetchall()
    #print(data)
    return data

def insert_news(data):
    sql = """INSERT INTO public.noticias (titulo, imagen, descripcion)
            SELECT titulo, imagen, descripcion
            FROM json_to_recordset(%s) x (titulo varchar(100),
                                          imagen varchar(500), 
                                          descripcion varchar(10000)
            )
        """
    pg_cur.execute(sql, (json.dumps([data]),))
    pg_conn.commit()

def delete_news(data):
    sql = """DELETE FROM public.noticias 
            WHERE id= (SELECT id FROM json_to_recordset(%s) x (id int)) """
    pg_cur.execute(sql, (json.dumps([data]),))
    pg_conn.commit()

def update_news(data):
    sql = """UPDATE public.noticias 
            SET titulo = subquery.titulo,
                imagen = subquery.imagen,
                descripcion = subquery.descripcion
            FROM (SELECT id, titulo, imagen, descripcion
                    FROM json_to_recordset(%s) x (  id int,
                                                    titulo varchar(100),
                                                    imagen varchar(500), 
                                                    descripcion varchar(10000)
            )) AS subquery
            WHERE noticias.id = subquery.id"""
    print(sql)
    pg_cur.execute(sql, (json.dumps([data]),))
    pg_conn.commit()
   
def read_events():
    sql = """SELECT id, titulo, imagen, fecha, hora, descripcion 
 FROM public.eventos;"""
    pg_cur.execute(sql)
    data = pg_cur.fetchall()
    return data

def insert_events(data):
    sql = """INSERT INTO public.eventos (titulo, imagen, fecha, hora, descripcion)
            SELECT titulo, imagen, fecha, hora, descripcion
            FROM json_to_recordset(%s) x (titulo varchar(200),
                                          imagen varchar(500), 
                                          fecha varchar(10),
                                          hora varchar(10),
                                          descripcion varchar(10000),
                                          
                                          
            )
        """
    pg_cur.execute(sql, (json.dumps([data]),))
    pg_conn.commit()

def delete_events(data):
    sql = """DELETE FROM public.eventos 
            WHERE id= (SELECT id FROM json_to_recordset(%s) x (id int)) """
    pg_cur.execute(sql, (json.dumps([data]),))
    pg_conn.commit()

def update_events(data):
    sql = """UPDATE public.eventos 
            SET titulo = subquery.titulo,
                imagen = subquery.imagen,
                fecha = subquery.fecha,
                hora = subquery.hora,
                descripcion = subquery.descripcion
            FROM (SELECT id, titulo, imagen, fecha, hora, descripcion
                    FROM json_to_recordset(%s) x (  id int,
                                                    titulo varchar(200),
                                                    imagen varchar(500),
                                                    fecha varchar(10),
                                                    hora varchar(10), 
                                                    descripcion varchar(10000)
                                                    
            )) AS subquery
            WHERE eventos.id = subquery.id"""
    print(sql)
    pg_cur.execute(sql, (json.dumps([data]),))
    pg_conn.commit()

if __name__ == '__main__':
    app.run(host="localhost", port="5000")