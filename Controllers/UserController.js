
var modelo = require('.././Models');
let googlesheet = require('.././spreadsheet')


module.exports = {

	getIndex : function(req,res,next){
    modelo.requisito.findAll({
      where :{
          Aceptada:0
      }
    }).then(function(data){
        console.log("hola");
        var string=JSON.stringify(data);
        var json=JSON.parse(string);
        var requisitos =[];
        for (a = 0 ; a < json.length ; a++){
          var Requirements = [];
          Requirements.Nombre = json[a].Nombre;
          Requirements.Descripcion = json[a].Descripcion;
          Requirements.Urgencia = json[a].Urgencia;
          Requirements.Fecha_ingreso = json[a].Fecha_ingreso;
          requisitos.push(Requirements);  
        }
        return res.render("index",{
          Requisitosnoaceptados : data
        });
    })

	},

	getPrueba : function (req, res ,next){
    modelo.gantt_tasks.findAll({
    }).then(function(rows){
      var string=JSON.stringify(rows);
      var json=JSON.parse(string);
      console.log(json);
      return res.render("vistaprueba",{
        data : json
      });

    });


    
  
	},

	getPrueba2: function(req,res,next){
		return res.render("vistaprueba2");
	},

	getNuevorequisito : function(req,res,next){
    modelo.requisito.findAll({}).then(function(data){
        var string=JSON.stringify(data);
        var json=JSON.parse(string);
        var nuevosrequerimientos =[]
        for (a = 0 ; a < json.length ; a++){
          var Requirements = [];
          Requirements.nombre = json[a].Nombre;
          Requirements.descripcion = json[a].Descripcion;
          nuevosrequerimientos.push(Requirements);
        }
        console.log("aca presentod cosas");
        console.log(nuevosrequerimientos);
        return res.render("nuevorequisito",{
          RequirementsArrays : data
        });
            
    })    	    
	},

  postNuevorequisito : function(req, res, next){

    let ts = Date.now();
    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    if(month<10){
      moth = "0"+String(month)
    }
    let year = date_ob.getFullYear();
    var date_string = String(year)+"/"+String(month)+"/"+String(date);
    modelo.requisito.create({
      Nombre : req.body.nombrerequisito,
      Descripcion : req.body.descripcion,
      Urgencia : req.body.opcion,
      Fecha_ingreso : date_string,
      Fecha_inicio : "",
      Fecha_termino : "",
      Aceptada : 0
    })
    return res.redirect('/');
  }, 
  
  probando : async (req, res ,next)=>{
    try{
      var registros = await googlesheet.AccederSpreadsheet();
      console.log(registros);

    }
    catch(err){
      console.log(err);
    }
    /*console.log("hola");
    const obtenerDatos = async (req, res )=> {
      registros = await googlesheet.AccederSpreadsheet();
      console.log(registros);
    }*/

    return res.render("probando",{
        registros : registros
    });
  },

  vistageneral : async (req, res, next)=>{

    try{
      var registros = await googlesheet.AccederSpreadsheet();

    }
    catch(err){
      console.log(err);
    }

    var envio =[];
    envio.push(registros);
    return res.render("paginaprincipal",{
      registros:registros
    });
  }

};