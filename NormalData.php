<?php
$Id = $_POST['ID'];
$Peso = $_POST['Peso'];
$CirCin = $_POST['CirCin'];
$CirCad = $_POST['CirCad'];
$PliBic = $_POST['PlieBic'];
$PliTri = $_POST['PliTri'];
$PorGra = $_POST['PorGra'];
$fecha = date("Y-m-d");

//Converción a double
//$intPeso = (double)$Peso;
//$intTalla = (double)$Talla;

//Cálculo del IMC
//$IMC = $intPeso / (pow($intTalla,2));
//conexión a base de datos y consulta
$conn = mysqli_connect("localhost", "root", "", "pacientes") or die ("Error al conectar");
$sql = "INSERT INTO consultanormal (FechaConsulta, IDP, Peso, CircCint, CircCad, PlieBic, PlieTric, PorGra) VALUES ('$fecha','$Id','$Peso','$CirCin','$CirCad','$PliBic','$PliTri', '$PorGra')";

if (mysqli_query($conn, $sql)) {
   	  	  echo "<script>alert('Usuario Guardado exitosamente');</script>";
			//header('location: index2.php');
	  
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
} 
 
?>