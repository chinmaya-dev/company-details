
from flask import Flask, render_template,request,redirect,url_for,jsonify
from bson import ObjectId 
from bson.json_util import dumps
from pymongo import MongoClient 
import os  
import json
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb://127.0.0.1:27017") #host uri    
db = client.companydb    #Select the database    
company_collection = db.Companydetails #Select the collection name   
@app.route("/getAllCompanies")
def getAllCompanies():
    company_details_all = company_collection.find()
    
    company_output = []
    for company in company_details_all:        
        company_output.append(company)
   
    response = dumps(company_output)
  
    
    return response

@app.route("/saveCompany", methods=['GET', 'POST'])
def saveCompany():
    
    
    name = request.json['name']
    address = request.json['address']
    phone= request.json['phone']    
    foundationyear= request.json['foundationyear']
    gstno= request.json['GSTNo']   
    company_record = { 
        "name": name, 
        "address": address, 
        "phone": phone, 
        "foundationyear": foundationyear, 
        "GSTNo": gstno
        }
    company_recd = company_collection.insert_one(company_record)
   
    return jsonify({"status": "succesfull"})

@app.route("/updateCompany", methods=['GET', 'POST'])    
def update ():  
    
    name = request.json['name']
    address = request.json['address']  
    phone= request.json['phone']    
    foundationyear= request.json['foundationyear']
    gstno= request.json['GSTNo']   
    idval=request.json["_id"]
  
    company_collection.update({"_id":ObjectId(idval['$oid'])}, {'$set':{ "name":name, "address":address, "phone":phone, "foundationyear":foundationyear, "GSTNo":gstno  }})    
    return jsonify({"status": "update succesfull"})


if __name__ == '__main__':
	app.run(debug=True)