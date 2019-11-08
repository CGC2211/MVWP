<?php
$fecha = date("Y-m-d");
$Id = $_POST['ID'];
$Peso = $_POST['Peso'];
$Bicep = $_POST['Bicep'];
$Tricep = $_POST['Tricep'];
$Sub = $_POST['Sub'];
$Cresta = $_POST['Cresta'];
$Supra = $_POST['Supra'];
$Abdom =  $_POST['Abdom'];
$Muslo = $_POST['Muslo'];
$Panto  = $_POST['Panto'];
$BicepR = $_POST['BicepR'];
$BicepF = $_POST['BicepF'];
$CinMin = $_POST['CinMin'];
$CadMax  = $_POST['Cad'];
$PantMax = $_POST['Pant']; 
$Humero = $_POST['Hum'];
$Femur =  $_POST['Femur'];
$VO2Max = $_POST['VO2'];
$Umbral = $_POST['Umbral'];
$RMBench = $_POST['RMB'];
$RMSquat = $_POST['RMS'];



$conn = mysqli_connect("localhost", "root", "", "pacientes") or die ("Error al conectar");
$sql = "INSERT INTO consultadeportista (FechaConsulta, IDP,Peso,Bicep,Tricep, Subescapular,Crestai,Suprae,Abdominal,MusloMedio, Pantorrilla,BicepRelax, BicepFlex,CinMin, CadMax, PantMax,Humero, Femur,VO2Max, Umbral, RMBench,RMSquat) VALUES ('$fecha','$Id','$Peso','$Bicep','$Tricep','$Sub','$Cresta','$Supra','$Abdom','$Muslo','$Panto','$BicepR','$BicepF','$CinMin','$CadMax','$PantMax','$Humero','$Femur','$VO2Max','$Umbral','$RMBench','$RMSquat')";

if (mysqli_query($conn, $sql)) {
   	  	  echo "<script>alert('Usuario Guardado exitosamente');</script>";
			//header('location: index2.php');
	  
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
} 
 
?>