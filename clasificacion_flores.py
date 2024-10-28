from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import numpy as np

iris = load_iris()
X_entrenamiento, X_prueba, y_entrenamiento, y_prueba = train_test_split(iris.data, iris.target, test_size=0.2, random_state=42)
modelo = RandomForestClassifier()
modelo.fit(X_entrenamiento, y_entrenamiento)

aplicacion = Flask(__name__)
CORS(aplicacion)

@aplicacion.route('/')
def inicio():
    return render_template('index.html')

@aplicacion.route('/predecir', methods=['POST'])
def predecir():
    datos = request.json
    caracteristicas = np.array([datos['largo_sepalo'], datos['ancho_sepalo'], datos['largo_petalo'], datos['ancho_petalo']]).reshape(1, -1)
    prediccion = modelo.predict(caracteristicas)
    especie = iris.target_names[prediccion[0]]
    return jsonify({'prediccion': especie})

if __name__ == '__main__':
    aplicacion.run(debug=True)
