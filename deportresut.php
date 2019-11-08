<?php
$fecha = date("Y-m-d");
$IDP = $_POST['IDP'];
$Densidad = $_POST['Densidad'];
$Brozec = $_POST['Brozec'];
$Siri = $_POST['Siri'];
$Masao = $_POST['Masao'];
$masarh = $_POST['masarh'];
$masarm = $_POST['masarm'];
$brozeck = $_POST['brozeck'];
$sirik = $_POST['sirik'];
$rosemm = $_POST['rosemm'];
$rosep = $_POST['rosep'];
$mlg = $_POST['mlg'];
$dwhi = $_POST['dwhi'];
$sirig = $_POST['sirig'];
$brozecg = $_POST['brozecg'];
$dwhim = $_POST['dwhim'];
$brozecgm = $_POST['brozecgm'];
$sirigm = $_POST['sirigm'];
$durinc = $_POST['durinc'];
$durinm = $_POST['durinm'];




$conn = mysqli_connect("localhost", "root", "", "pacientes") or die ("Error al conectar");
$sql = "INSERT INTO `resultadosdeportista` (FechaConsulta, IDP, Densidad, Brozec, Siri, Masao, masarh, masarm, brozeck, sirik, rosemm, rosep, mlg, dwhi, sirig, brozecg, dwhim, brozecgm, sirigm, durinc, durinm) VALUES ('$fecha', '$IDP', '$Densidad', '$Brozec', '$Siri', '$Masao', '$masarh', '$masarm', '$brozeck', '$sirik', '$rosemm', '$rosep', '$mlg', '$dwhi', '$sirig', '$brozecg', '$dwhim', '$brozecgm', '$sirigm', '$durinc', '$durinm')";

if (mysqli_query($conn, $sql)) {
   	  	  echo "<script>alert('Usuario Guardado exitosamente');</script>";
			//header('location: index2.php');
	  
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
} 
 
?>