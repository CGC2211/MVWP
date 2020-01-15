let flex = document.getElementById('flex');
let modal = document.getElementById('myModal');
let modals = document.getElementById('ModalSeguimiento');
const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
var myPieChart;

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

	switch(dv){
		case "NP":
			hidemenu();
			$(".newpa").css("display","flex");
			$(".Seguimiento").css("display","none");
			$(".datos-paciente").css("display","none");
			$('.consulta').css("display","none");
			$('#table-graphics').css("display","none");
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
	if(data.length > 0){
		$.each(data, function(index, object) {
                      
			$('#table-result-body').append(
		   ` 
		   <tr  indice="${index}">
		   <td scope="row">${object.Name}</td>
		   <td>${object.EDAD}</td>
		   <th><a class="consultas" data-name="${object.Name}"  data-id="${object.ID}" data-Tipo=${object.TIPO} data-talla="${object.ESTATURA}" data-Edad="${object.EDAD}" data-sexo="${object.SEXO}" ><span class="fa fa-search"></span></a></th>
		   <th><a class="nseguimiento" data-talla="${object.ESTATURA}" data-Edad="${object.EDAD}" data-sexo="${object.SEXO}" data-Tipo=${object.TIPO} data-id="${object.ID}"> <span class="addcon fa fa-list"></span></a></th>
			
			${object.TIPO == "Normal"? 
				object.Normal > 1 ?
					`<th><a class="reporte" data-name="${object.Name}" data-talla="${object.ESTATURA}" data-Edad="${object.EDAD}" data-sexo="${object.SEXO}" data-Tipo=${object.TIPO} data-id="${object.ID}"> <span class=" fa fa-line-chart"></span></a></th>`
				:
					`<th><a> <span class=" fa fa-ban"></span></a></th>`
			:

				object.Deportista > 1 ?
					`<th><a class="reporte" data-name="${object.Name}" data-talla="${object.ESTATURA}" data-Edad="${object.EDAD}" data-sexo="${object.SEXO}" data-Tipo=${object.TIPO} data-id="${object.ID}"> <span class=" fa fa-line-chart"></span></a></th>`
				:
					`<th><a> <span class=" fa fa-ban"></span></a></th>`
			}
		   
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

	
	 $('.spname').html("Nombre: " + $(this).attr('data-name'));
	 $('.spedad').html("Edad: " + $(this).attr('data-Edad'));
	 $('.spestatura').html("Estatura: " + $(this).attr('data-talla'));

	resultados($(this).attr('data-id'));
   $('.consulta').css('display', 'flex');
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

function resultados(id){
	

	$('.consulta').empty();
	$.ajax({
		type:"POST",
		url:'Consult.php',
		data:({ "calllastconsult": id}),
		dataType:"json",
			success: function(data){
				$.each(data, function(index, object){
					$('.consulta').append(
							`
							<div>Peso: ${object.Peso}</div>
							<div>Bicep: ${object.Bicep}</div>
							<div>Tricep: ${object.Tricep}</div>
							<div>Subescapular: ${object.Subescapular}</div>
							<div>Cresta iliaca: ${object.Crestai}</div>
							<div>Supra-espinoso: ${object.Suprae}</div>
							<div>Abdominal: ${object.Abdominal}</div>
							<div>Muslo Medio: ${object.MusloMedio}</div>
							<div>Pantorrilla: ${object.Pantorrilla}</div>
							<div>Bicep Relax: ${object.BicepRelax}</div>
							<div>Bicep Flex: ${object.BicepFlex}</div>
							<div>Cintura Minima: ${object.CinMin}</div>
							<div>Cadera Maxima: ${object.CadMax}</div>
							<div>Pantorrilla Maxima: ${object.PantMax}</div>
							<div>Humero: ${object.Humero}</div>
							<div>Femur: ${object.Femur}</div>
							<div>VO2Max: ${object.VO2Max}</div>
							<div>Umbral: ${object.Umbral}</div>
							<div>1 RM Bench: ${object.RMBench}</div>
							<div>1 RM Squat: ${object.RMSquat}</div>							
							`
						);	
				})
				
					
			},error: function(err){
				console.log(err);
			  }

	});

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
	 $('.ultimaconsulta').html("Fecha de la ultima consulta: " + dates[4]);
	
	 $('#graficas').css("display","flex");
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
	var ctxP = document.getElementById("sirichart").getContext('2d'); 
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

	var ctxP = document.getElementById("rosemmchart").getContext('2d'); 
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

	var ctxP = document.getElementById("brozekchart").getContext('2d'); 
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

function somatipo(data){
	console.log(data);
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
	let ejex = Ectomorfo - Endomorfo;
	let ejey = 2*(Mesomorfo-Ectomorfo-Endomorfo);
	/*console.log("IP es " + IP);
	console.log("Endomorfo es " + Endomorfo);
	console.log("Mesomorfo es " + Mesomorfo);
	console.log("Ectomorfo es " + Ectomorfo);
	console.log("EjeX es " + ejex);
	console.log("EjeY es " + ejey);*/

	const datos =[];
	datos.push(
		[0, 12],
		[-8, -8],
        [8, -8],
        [ ejex, ejey]);
		
	const datoscurva=[
		{x: 0 ,y: -7},
		{x: -5.8 ,y: -6},
		{x: -5, y: 2},
		{x: -4, y: 5},
		{x: -3 ,y: 8},
		{x:-2, y: 10},
		{x:-1, y:11},
		{x: 0 ,y: 12},
		{x:1,y:11},
		{x:2, y: 10},
		{x: 3 ,y: 8},
		{x: 4, y: 5},
		{x: 5, y: 2},
		{x: 5.8 ,y: -6},
		{x: 0 ,y: -7}
	];
	/*
	ESTATURA: "177"
Sumaplieges: "42"
Humero: "14"
Femur: "14"
BicepRelax: "14"
Peso: "75"
Tricep: "14"
Subescapular: "14"
Suprae: "14"
FechaConsulta: "2019-11-28"

	*/

	 $('#graficas').css("display","flex");
	 var ctxP = document.getElementById("somatochart").getContext('2d'); 
	            	  	myPieChart = new Chart(ctxP, {
							type: 'scatter',
							data: {
								datasets: [{
									label: 'Scatter Dataset',
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
									label: 'polar Dataset',
									data: [{ 
										x: ejex,
										y: ejey
									}], 
									pointBorderColor: "#0081AA",
									fillColor: '#ffff00',
									// Changes this dataset to become a line
									
								}]
							},
							options: 
							{
								fillColor: "#0081AA",
								backgroundColor	: "#28AD7E",
								legend: {
									labels:{
										defaultFontSize: 18
									}
								},
								scales: {
									yAxes: [{
										ticks: {
											autoSkip: false,
											max: 15,
											min: -10,
											stepSize:1
										}
									}],
									 xAxes: [{
										ticks: {
											autoSkip: false,
											max: 10,
											min: -10,
											stepSize:1
										}
									}]
								}
					      	}
						});
	 document.getElementById("somatochart").style.backgroundImage = " url('logos/somatocarta.png')";
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
});

function generarpdf(){
	var pesochart = document.getElementById('pesochart');
	var sirichart = document.getElementById('sirichart');
	var brozekchart = document.getElementById('brozekchart');
	var rosemmchart = document.getElementById('rosemmchart');
	var somatochart = document.getElementById('somatochart');
	
	var doc = new jsPDF('vertical','mm','letter');
	/*let texto = "Resultados de " + $('.spname').html();
	doc.text(15,10,texto);*/
	doc.fromHTML($('.datos-paciente').html(),15,15);
	doc.fromHTML($('.consulta').html(),15,45);
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'-'+today.getSeconds();
	var imgData = pesochart.toDataURL("image/PNG", 1.0);
    
	doc.addImage(imgData, 'PNG', 0, 135);
	imgData = sirichart.toDataURL("image/PNG",1.0);
	doc.addImage(imgData, 'JPEG', 105, 135);
	doc.addPage();
	imgData = brozekchart.toDataURL("image/PNG",1.0);
    doc.addImage(imgData, 'JPEG', 0, 0);
	imgData = rosemmchart.toDataURL("image/PNG",1.0);
    doc.addImage(imgData, 'JPEG', 105, 0);
	imgData = 'data:image/png;base64,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'
    doc.addImage(imgData, 'PNG', 2, 145,100,100);
	imgData = somatochart.toDataURL("image/jpg",1.0);
    doc.addImage(imgData, 'JPEG', 0, 135);
	doc.save('paciente'+date+ '.pdf');
}
