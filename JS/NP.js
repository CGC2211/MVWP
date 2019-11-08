let flex = document.getElementById('flex');
let modal = document.getElementById('myModal');
const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
let rdep = 

$(document).ready(function(){

hamburger.addEventListener('click', () =>{
	$(".Seguimiento").css("display","none");
	$(".newpa").css("display","none");
	hidemenu();
});

function hidemenu(){
	navlinks.classList.toggle("open");
	links.forEach(link =>{
		link.classList.toggle("fade");
	})
}
  $("#tipodepaciente").change(function(){
  	var paciente = $(this).val();
  		var width = $('#geneales').width();
  		switch(paciente){
  			case "Normal":
  				$(".normal").css("display","flex");
  				//$(".normal").css("width",width + 11);

  				$(".Deportista").css("display","none");
  			break;
  			case "Deportista":
  				$(".normal").css("display","none");
				$(".Deportista").css("display","flex");
				$(".Deportista").css("width",width + 11);
  			break;
  			default:
  				$(".normal").hide();
  				$(".Deportista").hide();
  			break;
  		}
  });

  $("#btnsndnormal").click( function(){
	
		validate();

		if ($('.errorclass').length == 0){
			$.ajax({
				type:"POST",
				url:'BasicData.php',
				data:({Nombre: $('#inputnombre').val(),
						Paterno: $('#inputapellidop').val(),
						Materno: $('#inputapellidom').val(),
						Sexo: $('#inputsexo').val(),
						Edad: $('#inputedad').val(),
						Estatura: $('#inputestatura').val(),
						Tipo: $('#tipodepaciente').val() 
					}),
					success: function(data){
						let id = data;
						insertnormal(id);
					}
			});
		}
	});

	$("#btnsnddeportista").click( function(){
	
		validate();
		if ($('.errorclass').length == 0){
			$.ajax({
				type:"POST",
				url:'BasicData.php',
				data:({Nombre: $('#inputnombre').val(),
						Paterno: $('#inputapellidop').val(),
						Materno: $('#inputapellidom').val(),
						Sexo: $('#inputsexo').val(),
						Edad: $('#inputedad').val(),
						Estatura: $('#inputestatura').val(),
						Tipo: $('#tipodepaciente').val() 
					}),
					success: function(data){
						let id = data;
						insertdeport(id);
					}
			});
		}
	});

function validate(){
	$('.element-general input').each(function(index){
		$(this).val() == '0' || $(this).val() == '' ? $(this).addClass('errorclass') : $(this).removeClass('errorclass');
	});
	
	if($('#tipodepaciente').val() != '' || $('#tipodepaciente').val() != 'default' ){
		switch($('#tipodepaciente').val()){
			case 'Normal':
					$('.element-normal input').each(function(index){
						$(this).val() == '0' || $(this).val() == '' ? $(this).addClass('errorclass') : $(this).removeClass('errorclass');
					});
			break;
			case 'Deportista':
				$('.element-deportista input').each(function(index){
					$(this).val() == '0' || $(this).val() == '' ? $(this).addClass('errorclass') : $(this).removeClass('errorclass');
				});
				
		}			
	}
}	

function insertnormal(id){
	$.ajax({
		type:"POST",
		url:'NormalData.php',
		data:({ID: id,
				Peso: $('#inputpeso').val(),
				CirCin: $('#inputcircin').val(),
				CirCad: $('#inputcircad').val(),
				PlieBic: $('#inputplibic').val(),
				PliTri: $('#inputplitri').val(),
				PorGra: $('#inputgrabia').val() 
			}),
			success: function(data){
				alert("Paciente guardado con Exito");
			},error: function(err){
				alert(err);
			  }
	});
}

function insertdeport(id){
	
	$.ajax({
		type:"POST",
		url:'DeportData.php',
		data:({ID: id,
				Peso: $('#inputpesod').val(),
				Bicep: $('#inputbic').val(),
				Tricep: $('#inputctri').val(),
				Sub: $('#inputsub').val(),
				Cresta: $('#inputcres').val(),
				Supra: $('#inputsup').val(),
				Abdom: $('#inputabd').val(),
				Muslo: $('#inputmus').val(),
				Panto: $('#inputpan').val(),
				BicepR: $('#inputbicr').val(),
				BicepF: $('#inputbicf').val(),
				CinMin: $('#inputcinmd').val(),
				Cad: $('#inputcadmd').val(),
				Pant: $('#inputpanm').val(),
				Hum: $('#inputhum').val(),
				Femur: $('#inputfem').val(),
				VO2: $('#inputvo2').val(),
				Umbral: $('#inputum').val(),
				RMB: $('#inputrmb').val(),
				RMS: $('#inputrms').val(),
			}),
			success: function(data){
				alert("Paciente guardado con Exito");
				insertdeportr(id);
			},error: function(err){
					console.log(err);
				  }
	});
}

function insertdeportr(id){
	let c = 0;
	let m = 0;
	let densidad = 0;
	let edad = parseInt($('#inputedad').val(),10);
	let sexo = $('#inputsexo').val();
	let estatura = parseInt($('#inputestatura').val(),10);
	switch(sexo){
		case "Masculino":
			switch(true){
				case  (edad >= 17 && edad <= 19 ):
					c = 1.162;
					m = 0.063;
				break;
				case (edad >= 20 && edad <= 29):
					c = 1.1631;
					m = 0.0632;
				break;
				case (edad >= 30 && edad <= 39):
					c = 1.142;
					m = 0.0544;
				break;
				case (edad >= 40 && edad <= 49):
					c = 1.162;
					m = 0.07;
				break;
				case (edad >= 50):
					c = 1.1715;
					m = 0.0779;
				break;
			}
		break;
	}
	let brozec = 0;
	let siri = 0;
	let masao = 0;
	let masarh = 0;
	let masarm = 0;
	let rosemm = 0;
	let rosep = 0;
	let mlg = 0;
	let brozeck = 0;
	let sirik = 0;
	let dwhi = 0;
	let dwhim = 0;
	let brozecg = 0;
	let brozecgm = 0;
	let sirig = 0;
	let sirigm = 0;

	densidad	= c-(m * (Math.log10(parseFloat($('#inputctri').val()) + parseFloat($('#inputsub').val()) + parseFloat($('#inputbic').val()) + parseFloat($('#inputcres').val()) )));
	brozec  	= ((4.57/densidad)-4.142)*100;
	siri 		= ((4.95/densidad)-4.5)*100;
	masao  		= (3.02*( ( (estatura/100)**2 )*(parseFloat($('#inputhum').val())/100)*(parseFloat($('#inputfem').val())/100)*400)**0.712);
	masarh 		= parseFloat($('#inputpesod').val())*0.241;
	masarm 		= parseFloat($('#inputpesod').val())*0.209;
	brozeck 	= parseFloat($('#inputpesod').val())*(brozec/100);
	sirik 		= parseFloat($('#inputpesod').val()) * (siri/100);
	rosemm 		= parseFloat($('#inputpesod').val())-(sirik+masao+masarh);
	rosep 		= (rosemm*100)/58;
	mlg 		= parseFloat($('#inputpesod').val()) - brozeck;
	dwhi 		= 1.0988-(0.0004*( parseFloat($('#inputctri').val()) + parseFloat($('#inputsub').val()) +parseFloat($('#inputbic').val()) + parseFloat($('#inputsup').val()) + parseFloat($('#inputabd').val()) + parseFloat($('#inputmus').val()) + parseFloat($('#inputpan').val()) ));
	sirig 		= ((4.95/dwhi)-4.5)*100;
	brozecg 	= ((4.57/dwhi)-4.142)*100;
	dwhim 		= 1.20953-0.08294*( Math.log10((parseFloat($('#inputctri').val())+parseFloat($('#inputsub').val())+parseFloat($('#inputbic').val())+parseFloat($('#inputsup').val())+parseFloat($('#inputabd').val())+parseFloat($('#inputmus').val())+parseFloat($('#inputpan').val()))));
	brozecgm 	= ((4.57/dwhim)-4.142)*100;
	sirigm 		= ((4.95/dwhim)-4.5)*100;

	$.ajax({
		type:"POST",
		url:'deportresut.php',
		data:({
			IDP : id,
			Densidad: densidad,
			Brozec : brozec,
			Siri : siri,
			Masao :masao,
			masarh :masarh,
			masarm  : masarm ,
			brozeck  : brozeck ,
			sirik  : sirik ,
			rosemm  : rosemm ,
			rosep  : rosep ,
			mlg  : mlg ,
			dwhi  : dwhi ,
			sirig  : sirig ,
			brozecg  : brozecg ,
			dwhim  : dwhim ,
			brozecgm  : brozecgm ,
			sirigm  : sirigm ,
			durinc  : c,
			durinm  : m  
			}),
			success: function(data){
				console.log(data);
			},error: function(err){
					console.log(err);
				  }
	});
}

$(".optional").click(function(){
	let dv = $(this).attr("data-value");

	switch(dv){
		case "NP":
			hidemenu();
			$(".newpa").css("display","flex");
			$(".Seguimiento").css("display","none");
		break;
		case "SG":
			hidemenu();
			$(".newpa").css("display","none");
			$(".Seguimiento").css("display","flex");
		default:
			break;
	}
});


$("#find").click( function(){
	if($('.Seguimiento input').val() == ''){
		alert("Ingrese un valor a buscar");
	}else{
		$("#table-result-body").empty();
		$.ajax({
			type:"POST",
			url:'Consult.php',
			data:({ "callFunc1": $('.Seguimiento input').val()}),
			dataType:"json",
				success: function(data){
					apendresults(data);
				},error: function(err){
					console.log(err);
				  }
		});
	}

});

function apendresults(data){
	if(data.length > 0){
		$.each(data, function(index, object) {
                      
			$('#table-result-body').append(
		   ` 
		   <tr  indice="${index}">
		   <td scope="row">${object.Name}</td>
		   <td>${object.EDAD}</td>
		   <th><a class="consultas" data-id="${object.ID}" data-Tipo=${object.TIPO} data-talla="${object.ESTATURA}" data-Edad="${object.EDAD}" data-sexo="${object.SEXO}" ><span class="fa fa-search"></span></a></th>
		   <th><a class="nseguimiento" data-id="${object.ID}"> <span class="addcon fa fa-list"  ></span></a></th>
		   </tr>
		   `
		   );
			
	   });
	}else{
		alert('No hay resultados con los parametros de busqueda');
	}
}

$(document).on('click', '.consultas', function () {
	
	fillprevinfo($(this).attr('data-Tipo'), $(this).attr('data-id'), $(this).attr('data-sexo'), $(this).attr('data-Edad'), $(this).attr('data-talla'));
	modal.style.display = 'flex';

});

$('.close').click(function(){
	$("#tableseguimientonormal").empty();
	$(".archive_month").empty();
	modal.style.display = 'none';

});


//$('.archive_month ul').hide();


function fillprevinfo(tipo , id, sexo,edad,estatura){
	switch(tipo){
		case "Normal":
			$('#tblsegd').hide();
			$.ajax({
				type:"POST",
				url:'Consult.php',
				data:({ "callFuncNormales": id}),
				dataType:"json",
					success: function(data){
						console.log(data);
						$.each(data, function(index, object) {
                      
							$('#tableseguimientonormal').append(
						   ` 
						   <tr  indice="${index}">
						   <td scope="row">${object.FechaConsulta}</td>
						   <td scope="row">${object.Peso}</td>
						   <td>${object.CircCint}</td>
						   <td>${object.CircCad}</td>
						   <td>${object.PlieBic}</td>
						   <td>${object.PlieTric}</td>
						   <td>${object.PorGra}</td>	
						   </tr>
						   `
						   );
						});
					},error: function(err){
						console.log(err);
					  }
			});
		break;
		case "Deportista":
				$('#tblsegn').hide();
				$('#sexolabel').html(sexo);
				$('#edadlabel').html(edad);
				$('#estaturalabel').html(estatura);
				$.ajax({
					type:"POST",
					url:'Consult.php',
					data:({ "callFuncDeport": id}),
					dataType:"json",
						success: function(data){
							$.each(data, function(index, object) {	  
							   $('.archive_month').append(
								   `
									<li class="rdeport"><span>Fecha de la consulta </span>
									<span> ${object.FechaConsulta} </span><span class="fa fa-plus"></span>
										<ul class="rdeportul">							   
											<li data-value="${object.Peso}" class="row${index}" >Peso ${object.Peso}</li>
											<li data-value="${object.Bicep}" class="row${index}" >Bicep ${object.Bicep}</li>
											<li data-value="${object.Tricep}" class="row${index}" >Tricep ${object.Tricep}</li>
											<li data-value="${object.Subescapular}" class="row${index}" >Subescapular ${object.Subescapular}</li>
											<li data-value="${object.Crestai}" class="row${index}" >Cresta-I ${object.Crestai}</li>
											<li data-value="${object.Suprae}" class="row${index}" >Supra-E ${object.Suprae}</li>
											<li data-value="${object.Abdominal}" class="row${index}" >Abdominal ${object.Abdominal}</li>
											<li data-value="${object.MusloMedio}" class="row${index}" >Muslo Medio ${object.MusloMedio}</li>
											<li data-value="${object.Pantorrilla}" class="row${index}" >Pantorrilla ${object.Pantorrilla}</li>
											<li data-value="${object.BicepRelax}" class="row${index}" >Bicep Relax ${object.BicepRelax}</li>
											<li data-value="${object.BicepFlex}" class="row${index}" >Bicep Flex ${object.BicepFlex}</li>	
											<li data-value="${object.CinMin}" class="row${index}" >Cintura Minima ${object.CinMin}</li>
											<li data-value="${object.CadMax}" class="row${index}" >Cadera Maxima ${object.CadMax}</li>
											<li data-value="${object.PantMax}" class="row${index}" >Pantorrilla Maxima ${object.PantMax}</li>	
											<li data-value="${object.Humero}" class="row${index}" >Humero ${object.Humero}</li>
											<li data-value="${object.Femur}" class="row${index}" >Femur ${object.Femur}</li>
											<li data-value="${object.VO2Max}" class="row${index}" >VO2Max ${object.VO2Max}</li>
											<li data-value="${object.Umbral}" class="row${index}" >Umbral ${object.Umbral}</li>
											<li data-value="${object.RMBench}" class="row${index}" >1 RM Bench ${object.RMBench}</li>
											<li data-value="${object.RMSquat}" class="row${index}" >1 RM Squat ${object.RMSquat}</li>
											<li><input class="depgraf" data-index="${index}" type="button" value="Graficar"/></li>
										</ul>
										
									</li>
								   `
							   )
							});
							$('.archive_month ul').hide();
						},error: function(err){
							console.log(err);
						  }
				});
		break;
	}
};

$('body').on('click', 'li.rdeport', function() { 
    $(this).find('ul').slideToggle();
});

$('body').on('click', 'input.depgraf', function() { 
   resultados($(this).attr('data-index'));
	console.log($(this).parent().parent());
   $(this).parent().parent().parent().find('ul').slideToggle();
});

function resultados(data){
	let clase = "row"+data;
	let datos = [];
	
	

	$('li.'+clase).each(function(index){
		datos.push($(this).attr("data-value"));
	});
	console.log(datos);
	/*
	$('#rdep').css('display' ,'flex');
	//$('#rdep').style.display = "flex";
	$('.cuerpo-resultados').empty();
	$('.cuerpo-resultados').append(
		`<div>
		<ul>
				<li><span class="lblo" >Densidad:					</span></li>
				<li><span class="lblo" >Brozeck % Grasa:</span></li>
				<li><span class="lblo" >Siri % Grasa:</span></li>
				<li><span class="lblo" >Masa Ósea:</span></li>
				<li><span class="lblo" >Masa Residual en hombres:</span></li>
				<li><span class="lblo" >Masa Residual en mujer:</span></li>
				<li><span class="lblo" >Rose MM (kg):</span></li>
				<li><span class="lblo" >Rose MM%:</span></li>
				<li><span class="lblo" >MLG Kg:</span></li>
				<li><span class="lblr" >${densidad}</span></li>
				<li><span class="lblr">${brozec}</span></li>
				<li><span class="lblr">${siri}</span></li>
				<li><span class="lblr">${masao}</span></li>
				<li><span class="lblr">${masarh}</span></li>
				<li><span class="lblr">${masarm}</span></li>
				<li><span class="lblr">${brozeck}</span></li>
				<li><span class="lblr">${sirik}</span></li>
				<li><span class="lblr">${rosemm}</span></li>
					
		</ul>
	</div>
	
	<div>
		<ul>
				<li><span class="lblo">Brozeck KG:</span></li>
				<li><span class="lblo">Siri KG:</span></li>
				<li><span class="lblo">D. whiteres:</span></li>
				<li><span class="lblo">Brozeck % Grasa:</span></li>
				<li><span class="lblo">Siri % Grasa:</span></li>
				<li><span class="lblo">D.Whiters M:</span></li>
				<li><span class="lblo">Brozeck % Grasa M:</span></li>
				<li><span class="lblo">Siri % Grasa M:</span></li>
				<li><span class="lblr">${rosep}</span></li>
				<li><span class="lblr">${mlg}</span></li>
				<li><span class="lblr">${dwhi}</span></li>
				<li><span class="lblr">${sirig}</span></li>
				<li><span class="lblr">${brozecg}</span></li>
				<li><span class="lblr">${dwhim}</span></li>
				<li><span class="lblr">${brozecgm}</span></li>
				<li><span class="lblr">${sirigm}</span></li>
		</ul>
	</div>`
	);
		*/
}


});
