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
											<li><input class="depgraf" data-fecha="${object.FechaConsulta}" data-id="${object.IDP}" data-index="${index}" type="button" value="Graficar"/></li>
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
   resultados($(this).attr('data-id'),$(this).attr('data-fecha'),$(this).attr('data-index'));
   
   $('#table-graphics').css('display', 'flex');
   $(".archive_month").empty();
   modal.style.display = 'none';
   //$(this).parent().parent().parent().find('ul').slideToggle();
});

function resultados(id,fecha, indexb){
	let datos = [];
	let peso = [];
	let i = 0;
	datos.push(id);
	datos.push(fecha);
	$('.rdeport').each(function(index){
		if(i <=  indexb){
			peso.push($(this).attr('data-peso'));
		}
		i++;
		
	});
	$('#resulttablebody').empty();
	$.ajax({
		type:"POST",
		url:'Consult.php',
		data:({ "callresultsdep": datos}),
		dataType:"json",
			success: function(data){
				$.each(data, function(index, object){
					$('#resulttablebody').append(
							`
							<tr>
								<td scope="row">${object.FechaConsulta}</td>
								<td>${peso[index]}</td>
								<td>${object.Brozec}</td>
								<td>${object.Siri}</td>
								<td>${object.Masao}</td>
								<td>${object.masarm}</td>
								<td>${object.rosemm}</td>
								<td>${object.rosep}</td>
								<td>${object.mlg}</td>
								<td>${object.brozeck}</td>
								<td>${object.sirik}</td>
							</tr>
							`
						);
				})

				
				Graficar(data,peso);
			},error: function(err){
				console.log(err);
			  }
	});
}

function Graficar(data,peso){
	let dates = [];
	let siri = [];
	let brozec = [];
	let rosemm = [];
	let i = 0;

	
	for(i = 0; i< data.length; i++ ){
		dates.push(data[i].FechaConsulta);
		siri.push(data[i].Siri);
		brozec.push(data[i].Brozec);
		rosemm.push(data[i].rosemm);
	 } 
	 $('#graficas').css("display","flex");
	 var ctxP = document.getElementById("pesochart").getContext('2d'); 
	            	  	myPieChart = new Chart(ctxP, {
				      	type: 'line',
				      	data: {
					        datasets: [{
								fillColor: "#2427ff",
								strokeColor: "#2427ff",
								data: peso,
								label: "Seguimiento de Peso "
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
											maxTicksLimit: 5
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
						maxTicksLimit: 5
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
						maxTicksLimit: 5
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
						maxTicksLimit: 5
					}
				}]
			}
			
		}
	});

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
	var doc = new jsPDF('vertical','mm','letter');
	let texto = "Resultados de " + $('#paciente').text();
	doc.text(15,10,texto);
	doc.autoTable({html: '#resulttable'});
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'-'+today.getSeconds();
	var imgData = pesochart.toDataURL("image/PNG", 1.0);
    doc.addPage();
	doc.addImage(imgData, 'PNG', 10, 0);
	imgData = sirichart.toDataURL("image/PNG",1.0);
	doc.addImage(imgData, 'JPEG', 10, 125);
	doc.addPage();
	imgData = brozekchart.toDataURL("image/PNG",1.0);
    doc.addImage(imgData, 'JPEG', 10, 0);
	imgData = rosemmchart.toDataURL("image/PNG",1.0);
    doc.addImage(imgData, 'JPEG', 10, 125);
	doc.save('paciente'+date+ '.pdf');
}
