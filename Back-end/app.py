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
    insertNews(json.loads(request.data))
    return jsonify({"step": "1"})

@app.route('/post_deleteNews', methods=['POST'])
def post_deleteNews():
    print (json.loads(request.data))
    deleteNews(json.loads(request.data))
    return jsonify({"step": "1"})

@app.route('/post_updateNews', methods=['POST'])
def post_updateNews():
    print (json.loads(request.data))
    updateNews(json.loads(request.data))
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

def insertNews(data):
    sql = """INSERT INTO public.noticias (titulo, imagen, descripcion)
            SELECT titulo, imagen, descripcion
            FROM json_to_recordset(%s) x (titulo varchar(100),
                                          imagen varchar(500), 
                                          descripcion varchar(10000)
            )
        """
    pg_cur.execute(sql, (json.dumps([data]),))
    pg_conn.commit()

def deleteNews(data):
    sql = """DELETE FROM public.noticias 
            WHERE id= (SELECT id FROM json_to_recordset(%s) x (id int)) """
    pg_cur.execute(sql, (json.dumps([data]),))
    pg_conn.commit()

def updateNews(data):
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
   

if __name__ == '__main__':
    app.run(host="localhost", port="5000")