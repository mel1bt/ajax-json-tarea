var plantilla = "<div>" +
	"<h1>__organizacion__</h1>" +
	"<p><strong>Dirección: </strong>__direccion__</p>" +
	"</div>";
var registro = "<div>" +
	"<p><strong>codigo: </strong>_codigo_</p>" +
		"<p><strong>nombre: </strong>_nombre_</p>" +
		"<p><strong>tribu: </strong>_tribu_</p>" +
	"</div>";
$(document).ready(function () {
	$.ajax({
		url: "http://localhost:3000/demo.json",
		type: "GET",
		success: function (response) {
		$("#texto").html(plantilla
		.replace("__organizacion__", response.organizacion)
		.replace("__direccion__",response.direccion)
		);
		var profesores = "<ul>"
		for (var i = 0, l = response.profesores.length; i < l; i++) {
			profesores += "<li>" + response.profesores[i] + "</li>";
		}
		profesores += "</ul>";
		$("#profesores").html(profesores);
		
		var asistentes = "<ul>"
		for (var i = 0, l = response.asistentes.length; i < l; i++) {
			asistentes += "<li>" + response.asistentes[i] + "</li>";
		}
		asistentes += "</ul>";
		$("#asistentes").html(asistentes);
			
		$("#registro").html(registro
		.replace("_codigo_", response.alumna1.codigo)
		.replace("_nombre_",response.alumna1.nombre)
		.replace("_tribu_",response.alumna1.tribu)								
		);	
			$("#registro2").html(registro
		.replace("_codigo_", response.alumna2.codigo)
		.replace("_nombre_",response.alumna2.nombre)
		.replace("_tribu_",response.alumna2.tribu)								
		);	
			$("#registro3").html(registro
		.replace("_codigo_", response.alumna3.codigo)
		.replace("_nombre_",response.alumna3.nombre)
		.replace("_tribu_",response.alumna3.tribu)								
		);
				
		},
		
		
		
		
		
		
		
		error: function (error) {
			console.log(error);
		}

	});
});