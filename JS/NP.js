let flex = document.getElementById('flex');
let modal = document.getElementById('myModal');
let modals = document.getElementById('ModalSeguimiento');
const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
var myPieChart;
let deportistaArray = [];
let ejex = 0;
let ejey = 0;

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
				$('.element-deportista input.notempty').each(function(index){
					$(this).val() == '0' || $(this).val() == '' ? $(this).addClass('errorclass') : $(this).removeClass('errorclass');
				});

				$('.element-deportista input:not(.notempty)').each(function(index){
					$(this).val() < '0' || $(this).val() == '' ? $(this).addClass('errorclass') : $(this).removeClass('errorclass');
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
				clean();
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
				clean();
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

function clean(){
	$('.inputsforms ').each(function(index){
		$(this).val(''); 
	});
}





$(".optional").click(function(){
	let dv = $(this).attr("data-value");
	var state = true;
	switch(dv){
		case "NP":
			hidemenu();
			$(".newpa").css("display","flex");
			$(".Seguimiento").css("display","none");
			$(".datos-paciente").css("display","none");
			$('#consulta').css("display","none");
			$('#table-graphics').css("display","none");
			$( "#navigation" ).css('transition','background-color 0.5s linear');
			$( "#navigation" ).css('background-color',"#7c8d91" );
		break;
		case "SG":
			hidemenu();
			$(".newpa").css("display","none");
			$(".Seguimiento").css("display","flex");
			$( "#navigation" ).css('transition','background-color 0.5s linear');
			$( "#navigation" ).css('background-color','#2D4996');
		default:
			break;
		state = !state;
	}
});


$("#find").click( function(){
	if($('.Seguimiento input').val() == ''){
		alert("Ingrese un valor a buscar");
	}else{
		$("#table-result-body").empty();
		$('#table-graphics').css('display', 'none');
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
	cleangraf();
	if(data.length > 0){
		$.each(data, function(index, object) {
                      
			$('#table-result-body').append(
		   ` 
		   <tr  indice="${index}">
		   <td scope="row">${object.Name}</td>
		   <td>${object.EDAD}</td>
		   <th><a class="consultas" data-name="${object.Name}"  data-id="${object.ID}" data-Tipo=${object.TIPO} data-talla="${object.ESTATURA}" data-Edad="${object.EDAD}" data-sexo="${object.SEXO}" ><span class="fa fa-search"></span></a></th>
		   <th><a class="nseguimiento" data-talla="${object.ESTATURA}" data-Edad="${object.EDAD}" data-sexo="${object.SEXO}" data-Tipo=${object.TIPO} data-id="${object.ID}"> <span class="addcon fa fa-list"></span></a></th>
			<th><a class="reporte" data-name="${object.Name}" data-talla="${object.ESTATURA}" data-Edad="${object.EDAD}" data-sexo="${object.SEXO}" data-Normal="${object.Normal}" data-Deportista="${object.Deportista}"  data-Tipo=${object.TIPO} data-id="${object.ID}"> <span class=" fa fa-line-chart"></span></a></th>
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
	$('#paciente').html($(this).attr('data-Name'));
	modal.style.display = 'flex';

});

$(document).on('click', '.reporte', function () {

	 $('#pdf').attr('data-tipo',$(this).attr('data-Tipo'));
	 $('.spname').html("<label style='font-weight: bold;'>Nombre:</label> " + $(this).attr('data-name'));
	 $('.spedad').html("<label style='font-weight: bold;'>Edad:</label> " + $(this).attr('data-Edad'));
	 $('.spestatura').html("<label style='font-weight: bold;'>Estatura:</label> " + $(this).attr('data-talla'));

	resultados($(this).attr('data-id') ,$(this).attr('data-Tipo'),$(this).attr('data-Normal'),$(this).attr('data-Deportista'));
   $('#consulta').css('display', 'flex');
   $('#table-graphics').css('display', 'flex');
   $('.datos-paciente').css('display', 'flex');
   $(".archive_month").empty();
   modal.style.display = 'none';
});

$(document).on('click','.nseguimiento', function(){
	var paciente =$(this).attr('data-Tipo');
  		switch(paciente){
  			case "Normal":
  				$(".normals").css("display","flex");
  				//$(".normal").css("width",width + 11);

  				$(".Deportistas").css("display","none");
  			break;
  			case "Deportista":
  				$(".normals").css("display","none");
				$(".Deportistas").css("display","flex");
  			break;
  			default:
  				$(".normals").hide();
  				$(".Deportistas").hide();
  			break;
		  }
		  
	$('#TIPOP').html($(this).attr('data-Tipo'));
	$('#IDPC').html($(this).attr('data-id'));
	$('#EDADP').html($(this).attr('data-Edad'));
	$('#SEXOP').html($(this).attr('data-sexo'));
	$('#ESTATURAP').html($(this).attr('data-talla'));	  
	modals.style.display = 'flex';
});

$('.close').click(function(){
	$("#tableseguimientonormal").empty();
	$(".archive_month").empty();
	modal.style.display = 'none';

});

$('#close').click(function(){
	modals.style.display = 'none';
	$('.element-normals input').each(function(index){
		$(this).val('') ;
	});

	$('.element-deportistas input').each(function(index){
		$(this).val('');
	});
});


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
			$('#tblsegn').show();
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
									<li data-peso="${object.Peso}" class="rdeport"><span>Fecha de la consulta </span>
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
											<li data-value="${object.Densidad}" class="row${index}" >Densidad ${object.Densidad}</li>
											<li data-value="${object.Brozec}" class="row${index}" >Brozec ${object.Brozec}</li>
											<li data-value="${object.Siri}" class="row${index}" >Siri ${object.Siri}</li>
											<li data-value="${object.Masao}" class="row${index}" >Masa Ósea: ${object.Masao}</li>
											<li data-value="${sexo == 'Masculino' ? object.masarh : object.masarm}" class="row${index}" >Masa Residual ${sexo == 'Masculino' ? object.masarh : object.masarm}</li>
											<li data-value="${object.rosemm}" class="row${index}" Rose MM (kg)  ${object.rosemm}</li>
											<li data-value="${object.rosep}" class="row${index}" >Rose MM% ${object.rosep}</li>
											<li data-value="${object.mlg}" class="row${index}" >MLG Kg:  ${object.mlg}</li>
											<li data-value="${object.durinc}" class="row${index}" >Durnin	C ${object.durinc}</li>
											<li data-value="${object.durinm}" class="row${index}" >Durnin	M ${object.durinm}</li>
											<li data-value="${object.brozeck}" class="row${index}" >Brozeck KG ${object.brozeck}</li>
											<li data-value="${object.sirik}" class="row${index}" >Siri KG  ${object.sirik}</li>
											<li data-value="${sexo == 'Masculino' ? object.dwhi : object.dwhim}" class="row${index}" >D. whiteres ${sexo == 'Masculino' ? object.dwhi : object.dwhim}</li>
											<li data-value="${sexo == 'Masculino' ? object.brozecg : object.brozecgm}" class="row${index}" >Brozeck % Grasa:${sexo == 'Masculino' ? object.brozecg : object.brozecgm}</li>
											<li data-value="${sexo == 'Masculino' ? object.sirig : object.sirigm}" class="row${index}" >Siri % Grasa:  ${sexo == 'Masculino' ? object.sirig : object.sirigm}</li>

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
				$('#tblsegd').show();
		break;
	}
};

$('body').on('click', 'li.rdeport', function() { 
    $(this).find('ul').slideToggle();
});

$('body').on('click', 'input.depgraf', function() { 
   
   //$(this).parent().parent().parent().find('ul').slideToggle();
});

function resultados(id, tipo,normal,deportista){
	
	$('#consulta').empty();
	switch(tipo){
		case 'Normal':
			$('#consulta').css('heigth','200px');
				$.ajax({
					type:"POST",
					url:'Consult.php',
					data:({ "calllastconsultn": id}),
					dataType:"json",
						success: function(data){
							$.each(data, function(index, object){
								$('#consulta').append(
										`
										<div class="row" ><div class="column">Peso</div><div class="column">${object.Peso}</div></div>
										<div class="row"><div class="column">Circunferencia Cintura</div><div class="column">${object.CircCint}</div></div>
										<div class="row"><div class="column">Circunferencia Cadera</div><div class="column">${object.CircCad}</div></div>
										<div class="row"><div class="column">Pliegue Bicep</div><div class="column"> ${object.PlieBic}</div></div>
										<div class="row"><div class="column">Pliegue Tricep</div><div class="column"> ${object.PlieTric}</div></div>
										<div class="row"><div class="column">% Grasa</div><div class="column"> ${object.PorGra}</div></div>
							
										`
									);	
							});
							 $('.ultimaconsulta').html("<label style='font-weight: bold;'>Fecha:</label> " + data[0].FechaConsulta);
							
								
						},error: function(err){
							console.log(err);
						}

				});

				if(normal>1){
					$.ajax({
					type:"POST",
					url:'Consult.php',
					data:({ "callgrafn": id}),
					dataType:"json",
						success: function(data){
							GraficarN(data);
						},error: function(err){
							console.log(err);
						}
					});	
				}
		break;
		case 'Deportista':
			$('#consulta').css('heigth','411px');
				$.ajax({
					type:"POST",
					url:'Consult.php',
					data:({ "calllastconsult": id}),
					dataType:"json",
						success: function(data){
							$.each(data, function(index, object){
								$('#consulta').append(
										`
										<div class="row" ><div class="column">Peso:</div><div class="column"> ${object.Peso}</div></div>
										<div class="row" ><div class="column">Bicep:</div><div class="column"> ${object.Bicep}</div></div>
										<div class="row" ><div class="column">Tricep:</div><div class="column"> ${object.Tricep}</div></div>
										<div class="row" ><div class="column">Subescapular:</div><div class="column"> ${object.Subescapular}</div></div>
										<div class="row" ><div class="column">Cresta iliaca:</div><div class="column"> ${object.Crestai}</div></div>
										<div class="row" ><div class="column">Supra-espinoso:</div><div class="column"> ${object.Suprae}</div></div>
										<div class="row" ><div class="column">Abdominal:</div><div class="column"> ${object.Abdominal}</div></div>
										<div class="row" ><div class="column">Muslo Medio:</div><div class="column"> ${object.MusloMedio}</div></div>
										<div class="row" ><div class="column">Pantorrilla:</div><div class="column"> ${object.Pantorrilla}</div></div>
										<div class="row" ><div class="column">Bicep Relax:</div><div class="column"> ${object.BicepRelax}</div></div>
										<div class="row" ><div class="column">Bicep Flex:</div><div class="column"> ${object.BicepFlex}</div></div>
										<div class="row" ><div class="column">Cintura Minima:</div><div class="column"> ${object.CinMin}</div></div>
										<div class="row" ><div class="column">Cadera Maxima:</div><div class="column"> ${object.CadMax}</div></div>
										<div class="row" ><div class="column">Pantorrilla Maxima:</div><div class="column"> ${object.PantMax}</div></div>
										<div class="row" ><div class="column">Humero:</div><div class="column"> ${object.Humero}</div></div>
										<div class="row" ><div class="column">Femur:</div><div class="column"> ${object.Femur}</div></div>
										<div class="row" ><div class="column">VO2Max:</div><div class="column"> ${object.VO2Max}</div></div>
										<div class="row" ><div class="column">Umbral:</div><div class="column"> ${object.Umbral}</div></div>
										<div class="row" ><div class="column">1 RM Bench:</div><div class="column"> ${object.RMBench}</div></div>
										<div class="row" ><div class="column">1 RM Squat:</div><div class="column"> ${object.RMSquat}</div></div>							
										`
									);	
							});
							 $('.ultimaconsulta').html("<label style='font-weight: bold;'>Fecha:</label> " + data[0].FechaConsulta);
							
							deportistaArray.push(['Peso (Kg):',parseFloat(data[0].Peso).toFixed(4)]);
							deportistaArray.push(['Siri (%)',parseFloat(data[0].sirig).toFixed(4)]);
							deportistaArray.push(['Brozeck (%):',parseFloat(data[0].brozecg).toFixed(4)]);
							deportistaArray.push(['MM (%):',parseFloat(data[0].rosep).toFixed(4)]);
							deportistaArray.push(['Masa Ósea (KG):',parseFloat(data[0].Masao).toFixed(4)]);
							deportistaArray.push(['Brozeck (Kg):',parseFloat(data[0].brozeck).toFixed(4)]);
							deportistaArray.push(['Siri (KG):',parseFloat(data[0].sirik).toFixed(4)]);
							deportistaArray.push(['VO2Max (ml/kg/min):',parseFloat(data[0].VO2Max).toFixed(4)]);
							deportistaArray.push(['1 RM Bench (Kg):',parseFloat(data[0].RMBench).toFixed(4)]);
							deportistaArray.push(['1 RM Squat (Kg):',parseFloat(data[0].RMSquat).toFixed(4)]);
							
						},error: function(err){
							console.log(err);
						}

				});
				if(deportista>1){
					$.ajax({
						type:"POST",
						url:'Consult.php',
						data:({ "callgraf": id}),
						dataType:"json",
							success: function(data){
								Graficar(data);
							},error: function(err){
								console.log(err);
							}
						});
						
						$.ajax({
						type:"POST",
						url:'Consult.php',
						data:({ "callsomatipo": id}),
						dataType:"json",
							success: function(data){
								somatipo(data);
							},error: function(err){
								console.log(err);
							}
						});	
				}
				
				else{
					$.ajax({
						type:"POST",
						url:'Consult.php',
						data:({ "callsomatipo": id}),
						dataType:"json",
							success: function(data){
								somatipo(data);
							},error: function(err){
								console.log(err);
							}
						});	
				}
				
		break;

	}

}

function Graficar(data){
	
	let dates = [];
	let peso = [];
	let siri = [];
	let brozec = [];
	let rosemm = [];

	for(i = 0; i< data.length; i++ ){
		dates.push(data[i].FechaConsulta);
		siri.push(data[i].Siri);
		brozec.push(data[i].Brozec);
		rosemm.push(data[i].rosemm);
		peso.push(data[i].Peso);
		
	 } 
	
	$('#graficas').css("display","flex");
	$('#pesochartdiv').css("display","block");
	$('#pesochartdiv').addClass('selected');
	var ctxP = document.getElementById("pesochart").getContext('2d'); 
	            	  	myPieChart = new Chart(ctxP, {
				      	type: 'line',
				      	data: {
					        datasets: [{
								
								
								data: peso,
								label: "Seguimiento de Peso "
						        }],
						        labels: dates
					      	},
					      	options: {
								responsive: true,
								fillColor: "#2427ff",
								strokeColor: "#2427ff",
								legend: {
									labels:{
										defaultFontSize: 18
									}
								},
								scales: {
									yAxes: [{
										ticks: {
											autoSkip: false,
											maxTicksLimit: 5
											
										}
									}],
									 xAxes: [{
										ticks: {
											autoSkip: false,
											maxRotation: 90,
											minRotation: 90
										}
									}]
								}
					      	}
						});
	$('#sirichartdiv').css("display","block");
	$('#sirichartdiv').addClass('selected');  
	ctxP = document.getElementById("sirichart").getContext('2d'); 
	myPieChart = new Chart(ctxP, {
	type: 'line',
	data: {
		datasets: [{
			data: siri,
			fillColor: "#0099ff",
			label: "Seguimiento de Siri"
			}],
			labels: dates
		},
		options: {
			responsive: true,
			legend: {
				labels:{
					defaultFontSize: 18
				}
			},
			scales: {
				yAxes: [{
					ticks: {
						autoSkip: true,
						maxTicksLimit: 5,
					}
				}],
				xAxes: [{
					ticks: {
						autoSkip: false,
						maxRotation: 90,
						minRotation: 90
					}
				}]
			}
			
		}
	});  

	$('#rosemmchartdiv').css("display","block");
	$('#rosemmchartdiv').addClass('selected'); 
	ctxP = document.getElementById("rosemmchart").getContext('2d'); 
	myPieChart = new Chart(ctxP, {
	type: 'line',
	data: {
		datasets: [{
			data: rosemm,
			fillColor: "#6a9eba",
			label: "Seguimiento de Rosemm"
			}],
			labels: dates
		},
		options: {
			responsive: true,
			legend: {
				labels:{
					defaultFontSize: 18
				}
			},scales: {
				yAxes: [{
					ticks: {
						autoSkip: true,
						maxTicksLimit: 5,
					}
				}],
				xAxes: [{
					ticks: {
						autoSkip: false,
						maxRotation: 90,
						minRotation: 90
					}
				}]
			}
			
		}
	});

	$('#brozekchartdiv').css("display","block"); 
	$('#brozekchartdiv').addClass('selected');
	ctxP = document.getElementById("brozekchart").getContext('2d'); 
	myPieChart = new Chart(ctxP, {
	type: 'line',
	data: {
		datasets: [{
			data: brozec,
			fillColor: "#585bad",
			label: "Seguimiento de Brozeck"
			}],
			labels: dates
		},
		options: {
			responsive: true,
			legend: {
				labels:{
					defaultFontSize: 18
				}
			},scales: {
				yAxes: [{
					ticks: {
						autoSkip: true,
						maxTicksLimit: 5,
					
					}
				}],
				xAxes: [{
					ticks: {
						autoSkip: false,
						maxRotation: 90,
						minRotation: 90
					}
				}]
			}
			
		}
	});

}

function GraficarN(data){
	console.log(data);
	let dates = [];
	let peso = [];
	let Grasa = [];


	for(i = 0; i< data.length; i++ ){
		dates.push(data[i].FechaConsulta);
		Grasa.push(data[i].PorGra);
		peso.push(data[i].Peso);
	 }

	  $('#graficas').css("display","flex");
	  $('#pesochartdiv').css("display","block");
	  $('#pesochartdiv').addClass('selected');
	 var ctxP = document.getElementById("pesochart").getContext('2d'); 
	            	  	myPieChart = new Chart(ctxP, {
				      	type: 'line',
				      	data: {
					        datasets: [{
								data: peso,
								label: "Seguimiento de Peso "
						        }],
						        labels: dates
					      	},
					      	options: {
								responsive: true,
								fillColor: "#2427ff",
								strokeColor: "#2427ff",
								legend: {
									labels:{
										defaultFontSize: 18
									}
								},
								scales: {
									yAxes: [{
										ticks: {
											autoSkip: false,
											maxTicksLimit: 5
											
										}
									}],
									 xAxes: [{
										ticks: {
											autoSkip: false,
											maxRotation: 90,
											minRotation: 90
										}
									}]
								}
					      	}
						});  
	$('#Grasachartdiv').css("display","block");
	$('#Grasachartdiv').addClass('selected');				
	ctxP = document.getElementById("Grasachart").getContext('2d'); 
	myPieChart = new Chart(ctxP, {
	type: 'line',
	data: {
		datasets: [{
			data: Grasa,
			fillColor: "#0099ff",
			label: "Seguimiento de Porcentaje de Grasa"
			}],
			labels: dates
		},
		options: {
			responsive: true,
			legend: {
				labels:{
					defaultFontSize: 18
				}
			},
			scales: {
				yAxes: [{
					ticks: {
						autoSkip: true,
						maxTicksLimit: 5,
					}
				}],
				xAxes: [{
					ticks: {
						autoSkip: false,
						maxRotation: 90,
						minRotation: 90
					}
				}]
			}
			
		}
	});    
}

function somatipo(data){
	let x = parseFloat(data[0].Sumaplieges) + (170.18/ parseFloat(data[0].ESTATURA));
	let Endomorfo = -0.7182 + 0.1451 * x - (0.00068*(Math.pow(x,2))) + (0.0000014* (Math.pow(x,3)) );
	let Mesomorfo = ((0.858 * parseFloat(data[0].Humero)) + (0.601 * parseFloat(data[0].Femur)) + (0.188 * parseFloat(data[0].BicepRelax))) - (parseFloat(data[0].ESTATURA) * 0.131) + 4.5;
	let IP = parseFloat(data[0].ESTATURA) / (Math.pow(parseFloat(data[0].Peso),1/3));
	let Ectomorfo = 0;
	

	

	if (IP >= 40.75)
		{
			Ectomorfo = (0.732 * IP) - 28.58;
		}
	if (IP > 38.25 || IP < 40.75)
		{
			Ectomorfo = (0.732 * IP) - 28.58;
		}
	if (IP <= 38.25)
		{
			Ectomorfo = 0.1;
		}
	ejex = Ectomorfo - Endomorfo;
	ejey = 2*(Mesomorfo-Ectomorfo-Endomorfo);
	

	const datos =[];
	datos.push(
		[0, 12],
		[-8, -8],
        [8, -8],
        [ ejex, ejey]);
		
	

	$('#graficas').css("display","flex");
	$('#somatotipo').css("display","block");
	$('#somatotipo').addClass('selected');
	var ctxP = document.getElementById("somatochart").getContext('2d');
	ctxP.height = 300;
	            	  	myPieChart = new Chart(ctxP, {
							type: 'scatter',
							data: {
								datasets: [{
									label: 'Somatocarta',
									data:[
									{
										x: -8, 
										y: -8
									},
									{
										x:0,
										y:12
									},
									
									{
										x: 8,
										y: -8
									},
									{
										x: -8, 
										y: -8
									}
									
									],
									borderColor: 'blue'
									
								}, {
									type: 'line',
									
									data: [
									{ 
										x: -5,
										y: 5
									},
									{ 
										x: 8,
										y: -8
									},
									{ 
										x: 8,
										y: -8
									},
									{ 
										x: -5,
										y: 5
									},
									{ 
										x: -9.5,
										y: 9.5
									}
									

									],
										pointBorderColor: "#0081AA",
										fillColor: '#ffff00',
										fill: false,
										lineTension: 0,
									
									
									// Changes this dataset to become a line
									
								},
								{
									type: 'line',
									
									data: [
									{ 
										x: 5,
										y: 5
									},
									{ 
										x: -8,
										y: -8
									},
									{ 
										x: -8,
										y: -8
									},
									{ 
										x: 5,
										y: 5
									},
									{ 
										x: 9.5,
										y: 9.5
									}
									

									],
										pointBorderColor: "#0081AA",
										fillColor: '#ffff00',
										fill: false,
										lineTension: 0,
									
									
									// Changes this dataset to become a line
									
								},
								{
									type: 'line',
									
									data: [
									{ 
										x: ejex,
										y: ejey
									}
									],
										pointBorderColor: "#1aaa00",
										fillColor: '#1aaa00',
										pointStyle:'cross'
									
									
									// Changes this dataset to become a line
									
								}
								]
							},
							options: 
							{
								maintainAspectRatio: false,
								fillColor: "#0081AA",
								backgroundColor	: "#28AD7E",
								legend: {
									display: false,
									labels:{
										defaultFontSize: 18
									}
								},
								scales: {
									yAxes: [{
										ticks: {
											autoSkip: false,
											max: 16,
											min: -10,
											stepSize:2,
											display: false
										}
									}],
									 xAxes: [{
										ticks: {
											autoSkip: false,
											max: 10,
											min: -10,
											stepSize:2,
											display: false

										}
									}]
								}
					      	}
						});
	document.getElementById("somatochart").style.backgroundImage = " url('logos/Mesocarta1.png')";
    document.getElementById("somatochart").style.backgroundSize= "324px 324px";
    document.getElementById("somatochart").style.backgroundPosition= "9.2% -100%" ;

}

$('body').on('click', 'input.segbtn', function() {

	 validates();
		if ($('.errorclass').length == 0){
			insertseguimiento($('#TIPOP').html());
			modals.style.display = 'none';
			$('.element-normals input').each(function(index){
				$(this).val('') ;
			});

			$('.element-deportistas input').each(function(index){
				$(this).val('');
			});
		}
	});







function validates(){
	var tipo = $('#TIPOP').html(); 
	switch(tipo){
		case 'Normal':
				$('.element-normals input').each(function(index){
					$(this).val() == '0' || $(this).val() == '' ? $(this).addClass('errorclass') : $(this).removeClass('errorclass');
				});
		break;
		case 'Deportista':
			$('.element-deportistas input').each(function(index){
				$(this).val() == '0' || $(this).val() == '' ? $(this).addClass('errorclass') : $(this).removeClass('errorclass');
			});
			
	}

}

function insertseguimiento(tipo){
	let datos = [];
	switch(tipo){
		case "Normal":
				$('.element-normals input').each(function(index){
					datos.push($(this).val());
				});
				$.ajax({
					type:"POST",
					url:'NormalData.php',
					data:({ID: $('#IDPC').html(),
							Peso: datos[0] ,
							CirCin: datos[1],
							CirCad: datos[2],
							PlieBic: datos[3],
							PliTri: datos[4],
							PorGra: datos[5] 
						}),
						success: function(data){
							alert("Paciente guardado con Exito");
						},error: function(err){
							alert(err);
						  }
				});
		break;
		case 'Deportista':
			$('.element-deportistas input').each(function(index){
				datos.push($(this).val());
			});
			
			$.ajax({
				type:"POST",
				url:'DeportData.php',
				data:({ID: $('#IDPC').html(),
						Peso: datos[0],
						Bicep: datos[1],
						Tricep: datos[2],
						Sub: datos[3],
						Cresta: datos[4],
						Supra: datos[5],
						Abdom: datos[6],
						Muslo: datos[7],
						Panto: datos[8],
						BicepR: datos[9],
						BicepF: datos[10],
						CinMin: datos[11],
						Cad: datos[12],
						Pant: datos[13],
						Hum: datos[14],
						Femur: datos[15],
						VO2: datos[16],
						Umbral: datos[17],
						RMB: datos[18],
						RMS: datos[19],
					}),
					success: function(data){
						
						let c = 0;
						let m = 0;
						let densidad = 0;
						let edad = parseInt($('#EDADP').html(),10);
						let sexo = $('#SEXOP').html();
						let estatura = parseInt($('#ESTATURAP').html(),10);
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

						densidad	= c-(m * (Math.log10(parseFloat(datos[2]) + parseFloat(datos[3]) + parseFloat(datos[1]) + parseFloat(datos[4]) )));
						brozec  	= ((4.57/densidad)-4.142)*100;
						siri 		= ((4.95/densidad)-4.5)*100;
						masao  		= (3.02*( ( (estatura/100)**2 )*(parseFloat(datos[14])/100)*(parseFloat(datos[15])/100)*400)**0.712);
						masarh 		= parseFloat(datos[0])*0.241;
						masarm 		= parseFloat(datos[0])*0.209;
						brozeck 	= parseFloat(datos[0])*(brozec/100);
						sirik 		= parseFloat(datos[0]) * (siri/100);
						rosemm 		= parseFloat(datos[0])-(sirik+masao+masarh);
						rosep 		= (rosemm*100)/58;
						mlg 		= parseFloat(datos[0]) - brozeck;
						dwhi 		= 1.0988-(0.0004*( parseFloat(datos[2]) + parseFloat(datos[3]) +parseFloat(datos[1]) + parseFloat(datos[5]) + parseFloat(datos[6]) + parseFloat(datos[7]) + parseFloat(datos[8]) ));
						sirig 		= ((4.95/dwhi)-4.5)*100;
						brozecg 	= ((4.57/dwhi)-4.142)*100;
						dwhim 		= 1.20953-0.08294*( Math.log10((parseFloat(datos[2])+parseFloat(datos[3])+parseFloat(datos[1])+parseFloat(datos[5])+parseFloat(datos[6])+parseFloat(datos[7])+parseFloat(datos[8]))));
						brozecgm 	= ((4.57/dwhim)-4.142)*100;
						sirigm 		= ((4.95/dwhim)-4.5)*100;

						$.ajax({
							type:"POST",
							url:'deportresut.php',
							data:({
								IDP : $('#IDPC').html(),
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
									alert('Consulta generada con exito');
								},error: function(err){
										console.log(err);
									}
						});

					},error: function(err){
							console.log(err);
						  }
			});
		break;
	}
}

$('#pdf').css("pointer-events", "none");
$('#pdf').css("display", "none");

$('#observaciones').keyup(function(){
	if($(this).val().length !=0){
		$('#pdf').css("pointer-events", "auto");
		$('#pdf').css("display", "block");
	}
	else{
		$('#pdf').css("pointer-events", "none");
		$('#pdf').css("display", "none");
	}     
});

$('body').on('click', '#pdf',
function (){
	var pesochart = document.getElementById('pesochart');
	var Grasachart = document.getElementById('Grasachart');
	var sirichart = document.getElementById('sirichart');
	var brozekchart = document.getElementById('brozekchart');
	var rosemmchart = document.getElementById('rosemmchart');
	var somatochart = document.getElementById('somatochart');
	var tipo = $('#pdf').attr('data-tipo');
	var doc = new jsPDF('vertical','mm','letter');
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'-'+today.getSeconds();
	

	switch(tipo){
		case 'Normal':

			var img = new Image();
			img.src= 'logos/logo.PNG';
			doc.addImage(img, 'JPEG', 10, 0, 50, 30);
			doc.setFont("courier");
			doc.fromHTML($('.spname').html(),10,40);
			doc.fromHTML($('.spedad').html(),10,45);
			doc.fromHTML($('.spestatura').html(),160,40);
			doc.fromHTML($('.ultimaconsulta').html(),160,45);
			doc.autoTable({
				theme: 'grid',
				columnStyles: { 
								0: { halign: 'center'},
								1: { halign: 'center' },
								 
							}, // Cells in first column centered and green
				tableWidth: 'wrap',
				margin: { top: 55,left:85 },
				tableLineColor: [0,0,0],
				body: [
					[$("#consulta div.row:nth-child(1) div.column:nth-child(1)").text(), $("#consulta div.row:nth-child(1) div.column:nth-child(2)").text()],
					[$("#consulta div.row:nth-child(2) div.column:nth-child(1)").text(), $("#consulta div.row:nth-child(2) div.column:nth-child(2)").text()],
					[$("#consulta div.row:nth-child(3) div.column:nth-child(1)").text(), $("#consulta div.row:nth-child(3) div.column:nth-child(2)").text()],
					[$("#consulta div.row:nth-child(4) div.column:nth-child(1)").text(), $("#consulta div.row:nth-child(4) div.column:nth-child(2)").text()],
					[$("#consulta div.row:nth-child(5) div.column:nth-child(1)").text(), $("#consulta div.row:nth-child(5) div.column:nth-child(2)").text()],
					[$("#consulta div.row:nth-child(6) div.column:nth-child(1)").text(), $("#consulta div.row:nth-child(6) div.column:nth-child(2)").text()]
				],styles: {font: "courier"},
				didParseCell: function (data) {
						var rows = data.table.body;
						
							if (data.row.index  % 2 == 1) {
							data.cell.styles.fillColor = [202,242,255];
						}else{
							data.cell.styles.fillColor= [255,255,255]
						}
						
						
					}
				});
			doc.setFontSize(12);
			img.src = 'logos/Barras.PNG';
			doc.addImage(img, 'JPEG', 170, 185, 50, 100);
			var splitTitle = doc.splitTextToSize($('#observaciones').val(), 180);
			doc.text(10,100,splitTitle,{align:'left',width:100});
			//doc.fromHTML($('#consulta ').html(),50,85);
			doc.setFontSize(10);
			doc.setTextColor(155,155,155);
			doc.text(10, 245, `M. en C. Manuel Alejandro Vázquez Bautista
Ced. Prof. 057902
Tel: (662)5 010757 o (662)2 258708
Héroes de Nacozari #72B, col. Modelo
Hermosillo, Sonora, México. 
Facebook.com/nutrackmexico `);
			if($('.selected').length > 0){
				doc.addPage();
				img.src= 'logos/logo.PNG';
				doc.addImage(img, 'JPEG', 10, 0, 50, 30);
				var imgData = pesochart.toDataURL("image/PNG", 1.0);   
				doc.addImage(imgData, 'PNG', 10, 45);
				imgData = Grasachart.toDataURL("image/PNG",1.0);
				doc.addImage(imgData, 'JPEG', 105, 45);
				doc.setFontSize(10);
				doc.setTextColor(155,155,155);
				doc.text(10, 245, `M. en C. Manuel Alejandro Vázquez Bautista
Ced. Prof. 057902
Tel: (662)5 010757 o (662)2 258708
Héroes de Nacozari #72B, col. Modelo
Hermosillo, Sonora, México. 
Facebook.com/nutrackmexico `);
				img.src = 'logos/Barras.PNG';
				doc.addImage(img, 'JPEG', 170, 185, 50, 100);

			}

			doc.save('paciente'+date+ '.pdf');
		break;
		case 'Deportista':
			var img = new Image();
			img.src= 'logos/logo.PNG';
			doc.addImage(img, 'JPEG', 10, 0, 50, 30);
			doc.setFont("courier");
			doc.fromHTML($('.spname').html(),10,40);
			doc.fromHTML($('.spedad').html(),10,45);
			doc.fromHTML($('.spestatura').html(),160,40);
			doc.fromHTML($('.ultimaconsulta').html(),160,45);
			doc.autoTable({
				theme: 'grid',
				columnStyles: { 
								0: { halign: 'center',fontStyle: 'bold'},
								1: { halign: 'center' },
								2: { halign: 'center',fontStyle: 'bold' },
								3: { halign: 'center' },
								 
							}, // Cells in first column centered and green
				tableWidth: 'wrap',
				margin: { top: 55,left:55 },
				tableLineColor: [0,0,0],
				body: [
						[
							deportistaArray[0][0],deportistaArray[0][1],
							deportistaArray[1][0],deportistaArray[1][1],
						],
						[
							deportistaArray[2][0],deportistaArray[2][1],
							deportistaArray[3][0],deportistaArray[3][1],
						],
						[
							deportistaArray[4][0],deportistaArray[4][1],
							deportistaArray[5][0],deportistaArray[5][1],
						],
						[
							deportistaArray[6][0],deportistaArray[6][1],
							deportistaArray[7][0],deportistaArray[7][1],
						],
						[
							deportistaArray[8][0],deportistaArray[8][1],
							deportistaArray[9][0],deportistaArray[9][1]
						]
					],styles: {font: "courier"},
				didParseCell: function (data) {
						var rows = data.table.body;
						var columns = data.table.body.column;
						
							if (data.row.index  % 2 == 1) {
							data.cell.styles.fillColor = [202,242,255];
						}else{
							data.cell.styles.fillColor= [255,255,255]
						}
						
						
					}
				});
			
			doc.setFontSize(12);
			img.src = 'logos/Barras.PNG';
			doc.addImage(img, 'JPEG', 170, 185, 50, 100);
			var splitTitle = doc.splitTextToSize($('#observaciones').val(), 200);
			doc.text(10,100,splitTitle,{align:'justify',maxWidth: 200});
			//doc.fromHTML($('#consulta ').html(),50,85);
			doc.setFontSize(10);
			doc.setTextColor(155,155,155);
			doc.text(10, 245, `M. en C. Manuel Alejandro Vázquez Bautista
Ced. Prof. 057902
Tel: (662)5 010757 o (662)2 258708
Héroes de Nacozari #72B, col. Modelo
Hermosillo, Sonora, México. 
Facebook.com/nutrackmexico `);
			
			if($('.selected').length > 1){
				doc.addPage();
				img.src= 'logos/logo.PNG';
				doc.addImage(img, 'JPEG', 10, 0, 50, 30);
				var imgData = pesochart.toDataURL("image/PNG", 1.0);   
				doc.addImage(imgData, 'PNG', 10, 35);
				imgData = sirichart.toDataURL("image/PNG",1.0);
				doc.addImage(imgData, 'JPEG', 105, 35);
				imgData = rosemmchart.toDataURL("image/PNG",1.0);
				doc.addImage(imgData, 'JPEG', 10, 135);
				doc.setFontSize(10);
				doc.setTextColor(155,155,155);
				doc.text(10, 245, `M. en C. Manuel Alejandro Vázquez Bautista
Ced. Prof. 057902
Tel: (662)5 010757 o (662)2 258708
Héroes de Nacozari #72B, col. Modelo
Hermosillo, Sonora, México. 
Facebook.com/nutrackmexico `);
				img.src = 'logos/Barras.PNG';
				doc.addImage(img, 'JPEG', 170, 185, 50, 100);

				doc.addPage();
				img.src= 'logos/logo.PNG';
				doc.addImage(img, 'JPEG', 10, 0, 50, 30);
				img.src= 'logos/Mesocarta1.PNG';
				doc.addImage(img, 'PNG', -5.2, 25.8,168,128.8);
				imgData = somatochart.toDataURL("image/jpg",1.0);
				doc.addImage(imgData, 'JPEG', 10, 34.8,127.5,99.2);
				doc.setFontSize(14);
				doc.setTextColor(155,155,155);
				doc.text(65,48,'Mesomorfo');
				doc.text(120,128,'Ectomorfo');
				doc.text(10,128,'Endomorfo');
				let valores = "El Valor de X: " + ejex;
				doc.text(10,143, valores);
				valores =  "El Valor de Y: " + ejey;
				doc.text(10,153, valores);
				doc.setFontSize(10);
				doc.setTextColor(155,155,155);
				doc.text(10, 245, `M. en C. Manuel Alejandro Vázquez Bautista
Ced. Prof. 057902
Tel: (662)5 010757 o (662)2 258708
Héroes de Nacozari #72B, col. Modelo
Hermosillo, Sonora, México. 
Facebook.com/nutrackmexico `);
				img.src = 'logos/Barras.PNG';
				doc.addImage(img, 'JPEG', 170, 185, 50, 100);

			}else{
				doc.addPage();
				img.src= 'logos/logo.PNG';
				doc.addImage(img, 'JPEG', 10, 0, 50, 30);
				//img.src= 'logos/MSC.PNG';
				img.src= 'logos/Mesocarta1.PNG';
				doc.addImage(img, 'PNG', -5.2, 25.8,168,128.8);
				imgData = somatochart.toDataURL("image/jpg",1.0);
				doc.addImage(imgData, 'JPEG', 10, 34.8,127.5,99.2);
				doc.setFontSize(14);
				doc.setTextColor(155,155,155);
				doc.text(65,48,'Mesomorfo');
				doc.text(120,128,'Ectomorfo');
				doc.text(10,128,'Endomorfo');
				let valores = "El Valor de X: " + ejex;
				doc.text(10,143, valores);
				valores =  "El Valor de Y: " + ejey;
				doc.text(10,153, valores);
				doc.setFontSize(10);
				doc.setTextColor(155,155,155);
				doc.text(10, 245, `M. en C. Manuel Alejandro Vázquez Bautista
Ced. Prof. 057902
Tel: (662)5 010757 o (662)2 258708
Héroes de Nacozari #72B, col. Modelo
Hermosillo, Sonora, México. 
Facebook.com/nutrackmexico `);
				img.src = 'logos/Barras.PNG';
				doc.addImage(img, 'JPEG', 170, 185, 50, 100);

			}
			doc.save('paciente'+date+ '.pdf');
			deportistaArray = [];
			$('#observaciones').val('');
			$('#pdf').css("pointer-events", "none");
			$('#pdf').css("display", "none");
		break;
	}

});

});




function cleangraf(){
	$('#graficas').css("display","none");
	$('#graficas div').css("display","none");
	$('#graficas div').removeClass('selected');
	$('.datos-paciente').css("display","none");
	$('#consulta').css("display","none");
	$('#observaciones').val('');
	$('#pesochart').remove(); // this is my <canvas> element
	$('#pesochartdiv').append('<canvas id="pesochart" width="200px" height="200px"></canvas>');
	$('#sirichart').remove(); // this is my <canvas> element
	$('#sirichartdiv').append('<canvas id="sirichart" width="200px" height="200px"></canvas>');
	$('#brozekchart').remove(); // this is my <canvas> element
	$('#brozekchartdiv').append('<canvas id="brozekchart" width="200px" height="200px"></canvas>');
	$('#rosemmchart').remove(); // this is my <canvas> element
	$('#rosemmchartdiv').append('<canvas id="rosemmchart" width="200px" height="200px"></canvas>');
	$('#Grasachart').remove(); // this is my <canvas> element
	$('#Grasachartdiv').append('<canvas id="Grasachart" width="200px" height="200px"></canvas>');
	$('#somatochart').remove(); // this is my <canvas> element
	$('#somatotipo').append('<canvas id="somatochart" width="200px" height="200px"></canvas>');
	$('#graficas div').removeClass("added");
	$('#graficas div canvas').removeClass("visible")
}